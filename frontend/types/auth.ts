export type UserRole = 'HOSPITAL_ADMIN' | 'DOCTOR' | 'RADIOLOGIST' | 'STAFF' | 'SYSTEM'

export interface TokenResponse {
  access_token: string
  refresh_token: string
  token_type: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface HospitalRegisterRequest {
  hospital_name: string
  hospital_type?: string | null
  registration_no: string
  city?: string | null
  country?: string | null
  admin_name: string
  admin_email: string
  password: string
}

export interface JwtPayload {
  sub?: string
  role?: UserRole
  type?: 'access' | 'refresh'
  exp?: number
}
