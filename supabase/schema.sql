-- =============================================
-- SIAPRAWAT DATABASE SCHEMA
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- PROFILES (extended user data)
-- =============================================
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT,
  avatar_url TEXT,
  role TEXT NOT NULL DEFAULT 'client' CHECK (role IN ('client', 'caregiver', 'admin')),
  address TEXT,
  city TEXT,
  province TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- CAREGIVER PROFILES
-- =============================================
CREATE TABLE caregivers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE NOT NULL,
  specializations TEXT[] DEFAULT '{}',
  experience_years INTEGER DEFAULT 0,
  education TEXT,
  certifications TEXT[] DEFAULT '{}',
  bio TEXT,
  hourly_rate DECIMAL(10,2),
  daily_rate DECIMAL(10,2),
  is_available BOOLEAN DEFAULT true,
  rating DECIMAL(3,2) DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  total_jobs INTEGER DEFAULT 0,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- SERVICES / LAYANAN
-- =============================================
CREATE TABLE services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  category TEXT NOT NULL CHECK (category IN ('lansia', 'difabel', 'pasca_operasi', 'lainnya')),
  base_price DECIMAL(10,2),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default services
INSERT INTO services (name, slug, description, icon, category, base_price) VALUES
  ('Perawatan Lansia Harian', 'perawatan-lansia-harian', 'Perawatan komprehensif untuk lansia sehari-hari termasuk kebersihan, makan, dan aktivitas', 'heart', 'lansia', 250000),
  ('Perawatan Difabel', 'perawatan-difabel', 'Pendampingan dan perawatan khusus untuk penyandang difabel fisik maupun mental', 'users', 'difabel', 300000),
  ('Fisioterapi Rumahan', 'fisioterapi-rumahan', 'Sesi fisioterapi di rumah oleh tenaga terlatih bersertifikat', 'activity', 'lansia', 350000),
  ('Pendampingan Medis', 'pendampingan-medis', 'Pendampingan ke rumah sakit, klinik, dan kontrol rutin', 'stethoscope', 'lansia', 200000),
  ('Perawatan Pasca Operasi', 'perawatan-pasca-operasi', 'Perawatan luka, monitoring kondisi dan pemulihan pasca operasi', 'bandage', 'pasca_operasi', 400000),
  ('Terapi Okupasi', 'terapi-okupasi', 'Terapi untuk meningkatkan kemandirian dalam aktivitas sehari-hari', 'brain', 'difabel', 300000);

-- =============================================
-- BOOKINGS / PEMESANAN
-- =============================================
CREATE TABLE bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  booking_code TEXT UNIQUE NOT NULL,
  client_id UUID REFERENCES profiles(id) NOT NULL,
  caregiver_id UUID REFERENCES caregivers(id),
  service_id UUID REFERENCES services(id) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN (
    'pending', 'confirmed', 'assigned', 'in_progress', 'completed', 'cancelled'
  )),
  -- Patient info
  patient_name TEXT NOT NULL,
  patient_age INTEGER,
  patient_condition TEXT,
  patient_address TEXT NOT NULL,
  patient_city TEXT NOT NULL,
  -- Schedule
  start_date DATE NOT NULL,
  end_date DATE,
  start_time TIME,
  duration_type TEXT NOT NULL DEFAULT 'daily' CHECK (duration_type IN ('hourly', 'daily', 'weekly', 'monthly')),
  duration_value INTEGER DEFAULT 1,
  -- Pricing
  price_per_unit DECIMAL(10,2) NOT NULL,
  total_price DECIMAL(10,2),
  -- Additional
  special_notes TEXT,
  emergency_contact TEXT,
  emergency_phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-generate booking code
CREATE OR REPLACE FUNCTION generate_booking_code()
RETURNS TRIGGER AS $$
BEGIN
  NEW.booking_code := 'SPW-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || UPPER(SUBSTRING(MD5(RANDOM()::TEXT), 1, 6));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_booking_code
BEFORE INSERT ON bookings
FOR EACH ROW EXECUTE FUNCTION generate_booking_code();

-- =============================================
-- REVIEWS
-- =============================================
CREATE TABLE reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE UNIQUE NOT NULL,
  client_id UUID REFERENCES profiles(id) NOT NULL,
  caregiver_id UUID REFERENCES caregivers(id) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Update caregiver rating on new review
CREATE OR REPLACE FUNCTION update_caregiver_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE caregivers SET
    rating = (SELECT AVG(rating) FROM reviews WHERE caregiver_id = NEW.caregiver_id),
    total_reviews = (SELECT COUNT(*) FROM reviews WHERE caregiver_id = NEW.caregiver_id)
  WHERE id = NEW.caregiver_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_review_created
AFTER INSERT ON reviews
FOR EACH ROW EXECUTE FUNCTION update_caregiver_rating();

-- =============================================
-- NOTIFICATIONS
-- =============================================
CREATE TABLE notifications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'info' CHECK (type IN ('info', 'success', 'warning', 'error')),
  read BOOLEAN DEFAULT false,
  link TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- ROW LEVEL SECURITY
-- =============================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE caregivers ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Public can view caregiver profiles" ON profiles FOR SELECT USING (role = 'caregiver');

-- Caregivers policies
CREATE POLICY "Public can view caregivers" ON caregivers FOR SELECT USING (true);
CREATE POLICY "Caregivers can update own profile" ON caregivers FOR UPDATE USING (
  profile_id = auth.uid()
);

-- Bookings policies
CREATE POLICY "Clients can view own bookings" ON bookings FOR SELECT USING (client_id = auth.uid());
CREATE POLICY "Clients can create bookings" ON bookings FOR INSERT WITH CHECK (client_id = auth.uid());
CREATE POLICY "Caregivers can view assigned bookings" ON bookings FOR SELECT USING (
  caregiver_id IN (SELECT id FROM caregivers WHERE profile_id = auth.uid())
);

-- Services are public
CREATE POLICY "Services are publicly readable" ON services FOR SELECT USING (true);

-- Notifications
CREATE POLICY "Users can view own notifications" ON notifications FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can update own notifications" ON notifications FOR UPDATE USING (user_id = auth.uid());

-- Auto create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, full_name, role)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', 'User'), 
          COALESCE(NEW.raw_user_meta_data->>'role', 'client'));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION handle_new_user();
