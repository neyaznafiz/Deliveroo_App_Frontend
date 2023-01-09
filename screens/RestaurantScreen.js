import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from "../node_modules/@expo/vector-icons/FontAwesome";
import DishRow from "../components/Restaurant/DishRow";

const RestaurantScreen = () => {
  const {
    params: {
      _id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView className="">
      <View className="relative">
        <Image
          source={{
            uri: imgUrl,
          }}
          className="w-full h-60 bg-gray-400 p-4"
        />

        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-7 left-2 bg-white py-1 pl-2 pr-3 rounded-full"
        >
          <FontAwesome name="arrow-left" size={19} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      {/* info section */}
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-2xl font-bold">{title}</Text>

          <View className="flex-row space-x-4 my-1">
            <View className="flex-row items-center space-x-1">
              <FontAwesome name="star" color="green" size={12} />
              <Text className="text-gray-500 text-xs">
                <Text className="text-green-700">{rating}</Text> • {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <FontAwesome
                name="location-arrow"
                color="green"
                size={14}
                className="opacity-30"
              />
              <Text className="text-xs text-gray-500">Nearby • {address}</Text>
            </View>
          </View>

          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>

        {/* question section */}
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <FontAwesome name="question-circle-o" size={20} color="gray" />
          <Text className="pl-2 flex-1 text-md font-semibold">
            Have A Food allergy ?
          </Text>
          <FontAwesome name="angle-right" color="#00CCBB" size={22} />
        </TouchableOpacity>
      </View>

      {/* menus section */}
      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

        {/* dish row */}
        {dishes.map((dish) => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
