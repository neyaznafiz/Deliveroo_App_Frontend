import { View, Text, ScrollView } from "react-native";
import React from "react";
import FontAwesome from "../../node_modules/@expo/vector-icons/FontAwesome";
import RestaurantCard from "../RestaurantCard";

const FeaturedRow = ({ title, description, featuredCategory }) => {
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
        <RestaurantCard
          id={1}
          imgUrl="https://i.ibb.co/cyLr2jx/sushi.webp"
          title="Yo!  |"
          rating={4.5}
          genre="Japanese"
          address="123, Main St"
          short_description="Nando's is a South African muntinational fast casual chain that specialise in flame-grilled peri style chicken."
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={2}
          imgUrl="https://i.ibb.co/cyLr2jx/sushi.webp"
          title="Yo! Sushi ||"
          rating={4.5}
          genre="Japanese"
          address="123, Main St"
          short_description="Nando's is a South African muntinational fast casual chain that specialise in flame-grilled peri style chicken."
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={3}
          imgUrl="https://i.ibb.co/cyLr2jx/sushi.webp"
          title="Yo! Sushi |||"
          rating={4.5}
          genre="Japanese"
          address="123, Main St"
          short_description="Nando's is a South African muntinational fast casual chain that specialise in flame-grilled peri style chicken."
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={4}
          imgUrl="https://i.ibb.co/cyLr2jx/sushi.webp"
          title="Yo! Sushi ||||"
          rating={4.5}
          genre="Japanese"
          address="123, Main St"
          short_description="Nando's is a South African muntinational fast casual chain that specialise in flame-grilled peri style chicken."
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
