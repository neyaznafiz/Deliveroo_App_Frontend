import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import FontAwesome from "../../node_modules/@expo/vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../../redux/features/basketSlice";

const DishRow = ({ dish }) => {
  const [isPressed, setIsPressed] = useState(false);

  const items = useSelector((state) => selectBasketItemsWithId(state, dish.id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ dish }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id: dish.id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border-b border-gray-200 p-4 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{dish.name}</Text>
            <Text className="text-gray-600">{dish.description}</Text>

            <Text className="text-black font-semibold mt-2">
              Price : <Currency quantity={dish.price} currency="USD" />
            </Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#808080",
              }}
              source={{ uri: dish.image }}
              className="w-20 h-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4 py-2 border-b border-gray-200">
          <View className="flex-row items-center gap-x-4">
            <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket} >
              <FontAwesome
                name="minus-circle"
                size={25}
                color={items.length ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <FontAwesome
                name="plus-circle"
                size={25}
                color="#00CCBB"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
