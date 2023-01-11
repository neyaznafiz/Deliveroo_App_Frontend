import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const BasketScreen = () => {

    const navigation = useNavigation();

  return (
    <View className="h-60 bg-black">
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen