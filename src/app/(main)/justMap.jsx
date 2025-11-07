import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import MapPage from '@/components/MapPage'

export default function JustMap() {
	return (
		<View style={styles.container}>
			{/* 如果 MapPage 可用则渲染地图，否则显示占位文本 */}
			{MapPage ? <MapPage /> : <Text>地图组件不可用</Text>}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})
