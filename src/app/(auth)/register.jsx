import { Text, View, StyleSheet } from 'react-native'

export default function Register() {
  return (
    <View style={styles.container}>
      <Text>注册</Text>
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
})
