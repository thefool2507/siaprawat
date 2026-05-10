export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string
          phone: string | null
          avatar_url: string | null
          role: 'client' | 'caregiver' | 'admin'
          address: string | null
          city: string | null
          province: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }
      caregivers: {
        Row: {
          id: string
          profile_id: string
          specializations: string[]
          experience_years: number
          education: string | null
          certifications: string[]
          bio: string | null
          hourly_rate: number | null
          daily_rate: number | null
          is_available: boolean
          rating: number
          total_reviews: number
          total_jobs: number
          verified: boolean
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['caregivers']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['caregivers']['Insert']>
      }
      services: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          icon: string | null
          category: 'lansia' | 'difabel' | 'pasca_operasi' | 'lainnya'
          base_price: number | null
          is_active: boolean
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['services']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['services']['Insert']>
      }
      bookings: {
        Row: {
          id: string
          booking_code: string
          client_id: string
          caregiver_id: string | null
          service_id: string
          status: 'pending' | 'confirmed' | 'assigned' | 'in_progress' | 'completed' | 'cancelled'
          patient_name: string
          patient_age: number | null
          patient_condition: string | null
          patient_address: string
          patient_city: string
          start_date: string
          end_date: string | null
          start_time: string | null
          duration_type: 'hourly' | 'daily' | 'weekly' | 'monthly'
          duration_value: number
          price_per_unit: number
          total_price: number | null
          special_notes: string | null
          emergency_contact: string | null
          emergency_phone: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['bookings']['Row'], 'id' | 'booking_code' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['bookings']['Insert']>
      }
      reviews: {
        Row: {
          id: string
          booking_id: string
          client_id: string
          caregiver_id: string
          rating: number
          comment: string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['reviews']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['reviews']['Insert']>
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          title: string
          message: string
          type: 'info' | 'success' | 'warning' | 'error'
          read: boolean
          link: string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['notifications']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['notifications']['Insert']>
      }
    }
  }
}

// Convenient type aliases
export type Profile = Database['public']['Tables']['profiles']['Row']
export type Caregiver = Database['public']['Tables']['caregivers']['Row']
export type Service = Database['public']['Tables']['services']['Row']
export type Booking = Database['public']['Tables']['bookings']['Row']
export type Review = Database['public']['Tables']['reviews']['Row']
export type Notification = Database['public']['Tables']['notifications']['Row']

export type CaregiverWithProfile = Caregiver & { profiles: Profile }
export type BookingWithDetails = Booking & {
  services: Service
  profiles: Profile
  caregivers?: CaregiverWithProfile
}
