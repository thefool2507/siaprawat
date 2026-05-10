import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

export function formatDateShort(date: string | Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}

export const BOOKING_STATUS_MAP = {
  pending: { label: 'Menunggu', color: 'bg-yellow-100 text-yellow-800' },
  confirmed: { label: 'Dikonfirmasi', color: 'bg-blue-100 text-blue-800' },
  assigned: { label: 'Perawat Ditugaskan', color: 'bg-purple-100 text-purple-800' },
  in_progress: { label: 'Sedang Berjalan', color: 'bg-green-100 text-green-800' },
  completed: { label: 'Selesai', color: 'bg-gray-100 text-gray-800' },
  cancelled: { label: 'Dibatalkan', color: 'bg-red-100 text-red-800' },
} as const

export const DURATION_TYPE_MAP = {
  hourly: 'Jam',
  daily: 'Hari',
  weekly: 'Minggu',
  monthly: 'Bulan',
} as const

export function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}
