'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

import * as authApi from '@/lib/api/auth'
import { decodeJwtPayload, isTokenExpired } from '@/lib/auth/jwt'
import { clearTokens, getAccessToken, getRefreshToken, setTokens } from '@/lib/auth/storage'
import type { HospitalRegisterRequest, LoginRequest, TokenResponse, UserRole } from '@/types/auth'

type AuthContextValue = {
  isAuthenticated: boolean
  isLoading: boolean
  role: UserRole | null
  userId: string | null
  login: (payload: LoginRequest) => Promise<void>
  registerHospital: (payload: HospitalRegisterRequest) => Promise<void>
  logout: () => Promise<void>
  redirectForRole: (role: UserRole | null | undefined) => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

function applyTokens(tokens: TokenResponse) {
  setTokens(tokens.access_token, tokens.refresh_token)
  return decodeJwtPayload(tokens.access_token)
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [role, setRole] = useState<UserRole | null>(null)
  const [userId, setUserId] = useState<string | null>(null)

  const redirectForRole = useCallback(
    (nextRole: UserRole | null | undefined) => {
      if (nextRole === 'HOSPITAL_ADMIN') {
        router.push('/dashboard/admin')
        return
      }
      router.push('/dashboard')
    },
    [router],
  )

  const syncSessionFromStorage = useCallback(async () => {
    const accessToken = getAccessToken()
    const refreshToken = getRefreshToken()

    if (!accessToken) {
      setRole(null)
      setUserId(null)
      setIsLoading(false)
      return
    }

    if (!isTokenExpired(accessToken)) {
      const payload = decodeJwtPayload(accessToken)
      setRole(payload?.role ?? null)
      setUserId(payload?.sub ?? null)
      setIsLoading(false)
      return
    }

    if (refreshToken) {
      try {
        const tokens = await authApi.refresh(refreshToken)
        const payload = applyTokens(tokens)
        setRole(payload?.role ?? null)
        setUserId(payload?.sub ?? null)
        setIsLoading(false)
        return
      } catch {
        clearTokens()
      }
    }

    setRole(null)
    setUserId(null)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    void syncSessionFromStorage()
  }, [syncSessionFromStorage])

  const login = useCallback(
    async (payload: LoginRequest) => {
      const tokens = await authApi.login(payload)
      const claims = applyTokens(tokens)
      setRole(claims?.role ?? null)
      setUserId(claims?.sub ?? null)
      redirectForRole(claims?.role)
    },
    [redirectForRole],
  )

  const registerHospital = useCallback(
    async (payload: HospitalRegisterRequest) => {
      const tokens = await authApi.registerHospital(payload)
      const claims = applyTokens(tokens)
      setRole(claims?.role ?? null)
      setUserId(claims?.sub ?? null)
      redirectForRole(claims?.role)
    },
    [redirectForRole],
  )

  const logout = useCallback(async () => {
    try {
      await authApi.logout()
    } catch {
      // Clear local session even if the API call fails.
    } finally {
      clearTokens()
      setRole(null)
      setUserId(null)
      router.push('/login')
    }
  }, [router])

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: role !== null,
      isLoading,
      role,
      userId,
      login,
      registerHospital,
      logout,
      redirectForRole,
    }),
    [isLoading, role, userId, login, registerHospital, logout, redirectForRole],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
