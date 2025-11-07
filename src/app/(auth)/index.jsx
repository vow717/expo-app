import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { useAuth } from '../../lib/AuthProvider'

export default function Login() {
  const router = useRouter()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const auth = useAuth()

  const registerF = () => {
    router.push('/register')
  }
  const handleLogin = () => {
    if (account === 'admin' && password === '123456') {
      auth.login('dummy-token')
      router.replace('/details')
    } else {
      auth.logout()
      alert('账号或密码错误')
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="请输入账号"
        value={account}
        onChangeText={setAccount}
      />
      <TextInput
        style={styles.input}
        placeholder="请输入密码"
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonView}>
        <Button style={styles.button} title="注册" onPress={registerF} />
        <Button style={styles.button} title="登录" onPress={handleLogin} />
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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
  button: {
    width: '40%',
    marginHorizontal: '5%',
  },
})
