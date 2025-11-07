import React from 'react'
import { Stack } from 'expo-router'

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        title: '',
        headerTitleAlign: 'center',
        animation: 'slide_from_right',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: '登录', headerLeft: () => null }} />
      <Stack.Screen name="register" options={{ title: '注册' }} />
    </Stack>
  )
}
