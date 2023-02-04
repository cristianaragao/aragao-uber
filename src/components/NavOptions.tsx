import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { IMAGECAR, IMAGEFOOD } from "../assets";
import tw from "../utils/tw";

const data = [
  {
    id: "123",
    title: "Viagem",
    size: "w-full h-16",
    image: IMAGECAR,
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Comida",
    size: "w-full h-16",
    image: IMAGEFOOD,
    screen: "EatsScreen",
  },
];

const NavOptions = () => {

  const navigation = useNavigation();

  return (
    <View style={tw(`flex flex-row w-full`)}>
      {data.map((item, index) => (
        <TouchableOpacity
        onPress={() => navigation.navigate(item.screen as never)}
          key={item.id}
          style={[
            tw("bg-gray-100 py-3 px-8 rounded-lg", index === 0 ? "mr-5" : "", 1 < index && index < data.length ? "ml-5" : ""),
            {
              flexGrow: 1,
              flexBasis: "auto",
            },
          ]}
        >
          <View style={tw("flex flex-col items-center w-full")}>
            <Image
              style={[tw(item.size), { resizeMode: "contain" }]}
              source={item.image}
            />
            <Text style={tw("mt-2 text-lg font-medium")}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavOptions;
