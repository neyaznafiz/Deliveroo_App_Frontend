import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";

const DishRow = ({ _id, name, description, price, image }) => {
  return (
    <TouchableOpacity className="bg-white border-b border-gray-200 p-4 ">
      <View className="flex-row">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-600">{description}</Text>

          <Text className="text-gray-600">
            <Currency quantity={price} currency="USD" />
          </Text>
        </View>

        <View>
          <Image
            style={{
              borderWidth: 2,
              borderColor: "#808080",
            }}
            source={{ uri: image }}
            className="w-20 h-20 bg-gray-300 p-4"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
