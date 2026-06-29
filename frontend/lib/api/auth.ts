import { apiFetch } from '@/lib/api/client'
import type { HospitalRegisterRequest, LoginRequest, TokenResponse } from '@/types/auth'

export function login(payload: LoginRequest): Promise<TokenResponse> {
  return apiFetch<TokenResponse>('/auth/login', {
    method: 'POST',
    body: payload,
  })
}

export function registerHospital(payload: HospitalRegisterRequest): Promise<TokenResponse> {
  return apiFetch<TokenResponse>('/auth/register-hospital', {
    method: 'POST',
    body: payload,
  })
}

export function logout(): Promise<{ message: string }> {
  return apiFetch<{ message: string }>('/auth/logout', {
    method: 'POST',
  })
}

export function refresh(refreshToken: string): Promise<TokenResponse> {
  return apiFetch<TokenResponse>('/auth/refresh', {
    method: 'POST',
    body: { refresh_token: refreshToken },
  })
}
