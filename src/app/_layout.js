import React, { useEffect } from 'react'
import { Slot, useRouter } from 'expo-router'
import { AuthProvider, useAuth } from '../lib/AuthProvider'

function InitialRedirector() {
  const { token, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && token) {
      // 已有 token，直接替换到 main 的详情页
      router.replace('/details')
    }
  }, [token, loading])

  return null
}

export default function Layout() {
  return (
    <AuthProvider>
      <InitialRedirector />
      <Slot />
    </AuthProvider>
  )
}
