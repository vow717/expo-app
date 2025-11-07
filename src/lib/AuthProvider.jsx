import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    const load = async () => {
      try {
        const t = await AsyncStorage.getItem('token')
        if (mounted) setToken(t)
      } catch (e) {
        if (mounted) setToken(null)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [])

  const login = async (t) => {
    try {
      await AsyncStorage.setItem('token', t)
      setToken(t)
    } catch (e) {
      setToken(t)
    }
  }

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token')
    } catch (e) {
      // ignore
    }
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthContext
