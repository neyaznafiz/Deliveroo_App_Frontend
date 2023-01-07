import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      <CategoryCard
        imgUrl="https://i.ibb.co/BzJFPF9/offer.webp"
        title="Offer"
      />
      <CategoryCard imgUrl="https://i.ibb.co/TYbLLj4/pizza.jpg" title="Pizza" />
      <CategoryCard
        imgUrl="https://i.ibb.co/cyLr2jx/sushi.webp"
        title="Sushi"
      />

      <CategoryCard
        imgUrl="https://i.ibb.co/pjFbv6J/ashian.png"
        title="Asian"
      />

      <CategoryCard imgUrl="https://i.ibb.co/mbCQyrW/thai.jpg" title="Thai" />

      <CategoryCard
        imgUrl="https://i.ibb.co/pwGrfMD/Tuna-Steak.jpg"
        title="Tuna Steak"
      />
    </ScrollView>
  );
};

export default Categories;
