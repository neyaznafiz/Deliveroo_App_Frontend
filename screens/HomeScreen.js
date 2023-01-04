import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";


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

              <Text className="font-bold text-xl">
                Current Location
               {/* down arrow icon */}
              </Text>
            </View>

            <View className="">
             {/* user icon */}
            </View>
          </View>
        </View>

        {/* search */}
        <View>
          <View>
            {/* search icon */}
            <TextInput
              placeholder="Restaurants and cuisines"
            keyboardType="default"
            />
          </View>

       {/* adjustment icon */}
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
