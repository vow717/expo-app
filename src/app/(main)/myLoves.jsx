import { Text, View, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { useAuth } from '../../lib/AuthProvider'
import { useEffect } from 'react'

export default function MyLoves() {
  const auth = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (!auth.loading && !auth.token) {
      router.replace('/')
    }
  }, [auth.loading, auth.token])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>我的爱好</Text>
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
