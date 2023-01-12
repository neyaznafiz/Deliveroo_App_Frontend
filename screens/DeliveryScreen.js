import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../redux/features/restaurantSlice";
import { useSelector } from "react-redux";
import FontAwesome from "../node_modules/@expo/vector-icons/FontAwesome";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-primary flex-1 pt-6">
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

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <SafeAreaView className="h-24 bg-white flex-row items-center space-x-5">
        <Image
          source={{ uri: "https://i.ibb.co/grx7RMV/delivery-img.png" }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />

        <View className="flex-1">
          <Text className="text-lg">Daniel Robert</Text>
          <Text className="text-gray-400">Your Rideer</Text>
        </View>

        <Text
          onPress={()=>Linking.openURL("tel:+16592410399")}
          className="text-primary text-lg font-bold mr-5">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
