import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../redux/features/restaurantSlice";
import { useSelector } from "react-redux";
import FontAwesome from "../node_modules/@expo/vector-icons/FontAwesome";
import * as Progress from "react-native-progress";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-primary flex-1 py-6">
      <SafeAreaView className="z-50">
        <View className="flex-row items-center justify-between p-5">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            // className="absolute top-8 right-3 bg-primary py-1 px-2 rounded-full"
          >
            <FontAwesome name="close" size={23} color="#fff" />
          </TouchableOpacity>

          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">45-55 Minutes</Text>
            </View>

            <Image
              source={{
                uri: "https://media.giphy.com/media/EvhlvwwQembQLXNJqE/giphy.gif",
              }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar
            size={30}
            width={225}
            indeterminate={true}
            color="#00CCBB"
                  />
                  
                  <Text className="mt-3 text-gray-500">
                      Your order at {restaurant.title} is being prepared
                  </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
