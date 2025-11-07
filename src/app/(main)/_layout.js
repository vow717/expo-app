import React, { useEffect } from 'react'
import { Tabs, useRouter } from 'expo-router'
import { useAuth } from '../../lib/AuthProvider'

export default function MainLayout() {
  const { token, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !token) {
      router.replace('/')
    }
  }, [loading, token])

  if (loading) return null

  return (
    <Tabs screenOptions={{ headerTitleAlign: 'center' }}>
      <Tabs.Screen name="details" options={{ title: '详情' }} />
      <Tabs.Screen name="myLoves" options={{ title: '我的爱好' }} />
      <Tabs.Screen name="justMap" options={{ title: '地图' }} />
    </Tabs>
  )
}
