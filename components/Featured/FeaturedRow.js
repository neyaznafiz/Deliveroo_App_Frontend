import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "../../node_modules/@expo/vector-icons/FontAwesome";
import RestaurantCard from "../Restaurant/RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    fetch("https://deliveroo-appserver-production.up.railway.app/restaurant")
      .then((res) => res.json())
      .then((data) => setRestaurant(data));
  }, []);

  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <FontAwesome name="arrow-right" size={20} color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* restaurantCards */}
        {restaurant.map((rst) => (
          <RestaurantCard key={rst._id} rst={rst} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
