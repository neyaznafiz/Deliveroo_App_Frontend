import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "../node_modules/@expo/vector-icons/FontAwesome";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="pt-6 bg-white">
      {/* header */}
      <View className="flex flex-row pb-2  items-center mx-3 space-x-2">
        <Image
          source={{
            uri: "https://i.ibb.co/grx7RMV/delivery-img.png",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex flex-row  justify-between items-center flex-1">
          <View className="">
            <Text className="font-bold text-gray-400 text-sx">
              Deliver Now!
            </Text>

            <Text className="font-bold text-xl space-x-2">
              Current Location
              <FontAwesome name="angle-down" size={22} color="#00CCBB" />
            </Text>
          </View>
          {/* user icon */}
          <FontAwesome name="user" size={30} color="#00CCBB" />
        </View>
      </View>

      {/* search */}

      <View className="flex flex-row space-x-2  items-center pb-2 mx-3">
        <View className="flex-row flex-1 items-center bg-gray-200 space-x-2 pl-1">
          {/* search icon */}
          <FontAwesome name="search" size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            className="p-1"
          />
        </View>

        {/* adjustment icon */}
        <FontAwesome name="filter" size={20} color="#00CCBB" />
      </View>

      {/* body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Category section */}
        <Categories />
        {/* Featured Rows section */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
