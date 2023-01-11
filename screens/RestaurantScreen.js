import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from "../node_modules/@expo/vector-icons/FontAwesome";
import DishRow from "../components/Restaurant/DishRow";
import BasketModal from "../components/Restaurant/BasketModal";
import { selectBasketItems } from "../redux/features/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../redux/features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: { rst },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id: rst._id,
        imgUrl: rst.imgUrl,
        title: rst.title,
        rating: rst.rating,
        genre: rst.genre,
        address: rst.address,
        short_description: rst.short_description,
        dishes: rst.dishes,
        long: rst.long,
        lat: rst.lat,
      })
    );
  }, [dispatch]);

  const items = useSelector(selectBasketItems);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      {items.length ? <BasketModal /> : <></>}

      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: rst.imgUrl,
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
            <Text className="text-2xl font-bold">{rst.title}</Text>

            <View className="flex-row space-x-4 my-1">
              <View className="flex-row items-center space-x-1">
                <FontAwesome name="star" color="green" size={12} />
                <Text className="text-gray-500 text-xs">
                  <Text className="text-green-700">{rst.rating}</Text> •{" "}
                  {rst.genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <FontAwesome
                  name="location-arrow"
                  color="green"
                  size={14}
                  className="opacity-30"
                />
                <Text className="text-xs text-gray-500">
                  Nearby • {rst.address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">
              {rst.short_description}
            </Text>
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
        <View className="pb-28">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {/* dish row */}
          {rst.dishes.map((dish) => (
            <DishRow key={dish.id} dish={dish} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
