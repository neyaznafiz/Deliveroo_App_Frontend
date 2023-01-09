import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import FontAwesome from "../../node_modules/@expo/vector-icons/FontAwesome";

const DishRow = ({ _id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border-b border-gray-200 p-4 ${isPressed && "border-b-0"}`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-600">{description}</Text>

            <Text className="text-black font-semibold mt-2">
              Price : <Currency quantity={price} currency="USD" />
            </Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#808080",
              }}
              source={{ uri: image }}
              className="w-20 h-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4 py-2 border-b border-gray-200">
          <View className="flex-row items-center gap-x-4">
            <TouchableOpacity>
              <FontAwesome
                name="minus-circle" 
                size={25}
                color="#00CCBB"
                // color={items.length ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>

            <Text>0</Text>

            <TouchableOpacity>
            <FontAwesome
                name="plus-circle" 
                size={25}
                color="#00CCBB"
                // color={items.length ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
