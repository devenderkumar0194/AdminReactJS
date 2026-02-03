import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const AuthContext = createContext(null)

const AUTH_KEY = 'admin_auth'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_KEY)
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch {
        localStorage.removeItem(AUTH_KEY)
      }
    }
    setLoading(false)
  }, [])

  const login = useCallback((email, password) => {
    // Demo: accept admin@admin.com / admin123
    if (email === 'admin@admin.com' && password === 'admin123') {
      const userData = { email, name: 'Admin' }
      setUser(userData)
      localStorage.setItem(AUTH_KEY, JSON.stringify(userData))
      return { success: true }
    }
    return { success: false, error: 'Invalid email or password' }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem(AUTH_KEY)
  }, [])

  const value = { user, loading, login, logout, isAuthenticated: !!user }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
