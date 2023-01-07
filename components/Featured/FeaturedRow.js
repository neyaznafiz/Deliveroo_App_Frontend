import { View, Text } from "react-native";
import React from "react";
import FontAwesome from "../../node_modules/@expo/vector-icons/FontAwesome";

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <FontAwesome name="arrow-right" size={20} color="#00CCBB"/>
      </View>

      <Text className="text-xs text-gray-500 px-4">{ description}</Text>
    </View>
  );
};

export default FeaturedRow;
