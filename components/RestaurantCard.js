import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import FontAwesome from "../node_modules/@expo/vector-icons/FontAwesome";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow-sm">
      <Image source={{ uri: imgUrl }} className="w-64 h-36 rounded-sm" />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>

        <View className="flex-row items-center space-x-1">
          <FontAwesome name="star" color="green" size={12} />
          <Text className="text-gray-500 text-xs">
            <Text className="text-green-700">{rating}</Text> • {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <FontAwesome name="location-arrow" color="green" size={14} />
          <Text className="text-xs text-gray-500">Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
