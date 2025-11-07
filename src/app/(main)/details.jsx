import { Text, View, StyleSheet, Button } from 'react-native'
import { useRouter } from 'expo-router'
import { useAuth } from '../../lib/AuthProvider'
import { useEffect } from 'react'

export default function Details() {
  const router = useRouter()
  const auth = useAuth()
  useEffect(() => {
    if (!auth.loading && !auth.token) {
      // 未登录则跳回登录页
      router.replace('/')
    }
  }, [auth.loading, auth.token])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>详情页</Text>
      <View style={{ marginTop: 20 }}>
        <Button
          title="退出登录"
          onPress={() => {
            auth.logout()
            router.replace('/')
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#e29447',
  },
})
