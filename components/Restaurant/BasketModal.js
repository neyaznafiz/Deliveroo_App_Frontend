import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../../redux/features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketModal = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  const navigation = useNavigation();

  return (
    <View className="absolute bottom-7 w-full z-50">
      <View className="flex-row justify-between items-center bg-primary mx-5 p-3 rounded-lg">
        <Text className="text-white font-extrabold text-lg py-1 px-2 bg-secondary rounded-md">
          {items.length}
        </Text>

        <TouchableOpacity>
          <Text className="text-white text-lg font-extrabold tracking-wide">
            View Basket
          </Text>
        </TouchableOpacity>

        <Text className="text-white font-extrabold text-lg">
          <Currency quantity={basketTotal} currency="USD" />
        </Text>
      </View>
    </View>
  );
};

export default BasketModal;
