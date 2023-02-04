import React from "react";
import { Image, View, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import NavOptions from "../components/NavOptions";
import Search from "../components/Search";
import tw from "../utils/tw";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw("bg-white h-full")}>
      <View style={tw("p-5 flex flex-col")}>
        <Image
          style={[tw("h-20 w-20 mt-5"), { resizeMode: "contain" }]}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
        <NavOptions />
        <Search placeholder="Onde você está?" />
        <Search placeholder="Para onde iremos?" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
