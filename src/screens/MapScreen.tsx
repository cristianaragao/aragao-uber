import React from "react";
import { Text, View, SafeAreaView } from "react-native";

import tw from "../utils/tw";

const MapScreen = () => {
  return (
    <SafeAreaView style={tw("bg-white h-full")}>
      <View style={tw('p-5')}>
       <Text>I am mapscreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
