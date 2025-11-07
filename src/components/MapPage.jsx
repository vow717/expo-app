import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // 注意正确导入
import * as Location from 'expo-location';

const MapPage = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState(null);

    useEffect(() => {
  (async () => {
    // 先检查当前权限状态（而非直接请求）
    const { status: existingStatus } = await Location.getForegroundPermissionsAsync();
    let finalStatus = existingStatus;

    // 如果未授权，主动请求一次
    if (existingStatus !== 'granted') {
      const { status } = await Location.requestForegroundPermissionsAsync();
      finalStatus = status;
    }

    // 如果仍未授权，提示用户去设置开启
    if (finalStatus !== 'granted') {
      alert('请在手机设置中给 Expo Go 开启位置权限，否则无法使用地图功能');
      return; // 权限不足，终止后续逻辑
    }

    // 权限已授权，尝试获取位置
    try {
      const location = await Location.getCurrentPositionAsync({
        timeout: 15000, // 延长超时时间到15秒，给足定位时间
      });
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (error) {
      alert('获取位置失败，请确保在开阔区域，或稍后重试');
      console.error('定位错误：', error);
    }
  })();
}, []);

  // 权限未授予时显示提示
  if (permissionStatus === 'denied') {
    return (
      <View style={styles.container}>
        <Text>需要开启位置权限才能使用地图功能</Text>
      </View>
    );
  }

  // 位置未获取时显示加载
  if (!userLocation) {
    return (
      <View style={styles.container}>
        <Text>正在获取位置...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* 地图组件 */}
      <MapView
        style={styles.map}
        // 初始地图中心和缩放范围
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.02, // 缩放级别（值越小越精确）
          longitudeDelta: 0.02,
        }}
        // 显示用户当前位置的蓝点
        showsUserLocation={true}
        // 允许缩放
        zoomEnabled={true}
      >
        {/* 自定义标记点（可选） */}
        <Marker
          coordinate={userLocation} // 标记点坐标（这里用用户当前位置）
          title="我的位置"
          description="这是通过定位获取的位置"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapPage;