import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../redux/features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../redux/features/basketSlice";
import FontAwesome from "../node_modules/@expo/vector-icons/FontAwesome";
import Currency from "react-currency-formatter";


const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.dish.id] = results[item.dish.id] || []).push(item.dish);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        {/* top section */}
        <View className="relative px-5 pt-5 pb-3 border-b border-primary bg-white">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className=" text-center">{restaurant.title}</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-8 right-3 bg-primary py-1 px-2 rounded-full"
          >
            <FontAwesome name="close" size={23} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* deliver info section */}
        <View className=" flex-row items-center space-x-4 px-4 py-3 my-5 bg-white">
          <Image
            source={{ uri: "https://i.ibb.co/grx7RMV/delivery-img.png" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-primary">Change</Text>
          </TouchableOpacity>
        </View>

        {/* items section */}
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center justify-start space-x-3 py-3 px-5 bg-white"
            >
              <Image
                source={{ uri: items[0]?.image }}
                className="h-12 w-12 rounded-full"
              />

              <Text className="flex-1">{items[0]?.name}</Text>

              <View className="flex-row w-36 items-center justify-between">
                <Text>
                  <Currency quantity={items[0]?.price} currency="USD" />
                </Text>

                <Text className="text-primary"> {items.length}X</Text>

                <Text>
                  <Currency
                    quantity={items[0]?.price * items.length}
                    currency="USD"
                  />
                </Text>
              </View>

              <TouchableOpacity>
                <Text
                  onPress={() =>
                    dispatch(removeFromBasket({ id: parseInt(key) }))
                  }
                  className="text-primary text-xs"
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* subtotal section */}
        <View className="p-5 bg-white mt-5 space-y-4 shadow-lg">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="USD" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="USD" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + 5.99} currency="USD" />
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
