import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "../node_modules/@expo/vector-icons/FontAwesome"


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="pt-6 bg-white">
      <Text>
        {/* header */}
        <View className="flex flex-row pb-2 px-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex flex-row  justify-between items-center w-[350px]">
            <View className="">
              <Text className="font-bold text-gray-400 text-sx">
                Deliver Now!
              </Text>

              <Text className="font-bold text-xl space-x-2">
                Current Location
                <FontAwesome name="angle-down" size={22} color="#00CCBB" />
              </Text>
            </View>

            <View className=" border-2 border-[#00CCBB] rounded-full">
              {/* user icon */}
              <Text className="text-[#00CCBB] px-2 py-1 ">N</Text>
            </View>
          </View>
        </View>

        {/* search */}
        
        <View className="flex flex-row space-x-2  items-center pb-2 mx-3">
          <View className="flex-row flex-1 items-center bg-gray-200 space-x-2">
            {/* search icon */}
            <FontAwesome name="search" size={20} color="gray" />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
              className="p-1 w-[350px]"
            />

          </View>

          {/* adjustment icon */}
          <FontAwesome name="filter" size={20} color="#00CCBB" />

        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
