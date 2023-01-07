import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="h-16 w-16 rounded-lg" />
      <Text className="absolute bottom-1 left-1 text-white font-bold ">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
