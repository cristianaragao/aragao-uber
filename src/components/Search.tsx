import React from "react";
import { Image, View, SafeAreaView } from "react-native";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import NavOptions from "../components/NavOptions";
import tw from "../utils/tw";

const Search = ({
  placeholder,
  setValue,
  className,
}: {
  placeholder: string;
  setValue?: (value: GooglePlaceDetail | null) => void;
  className?: string;
}) => {
  return (
    <View style={tw(className || "")}>
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        nearbyPlacesAPI="GooglePlacesSearch"
        enablePoweredByContainer={false}
        query={{
          key: process.env.REACT_APP_GOOGLE_MAPS_APIKEY,
          language: "pt-BR",
        }}
        onPress={(data, details) => {
          setValue && setValue(details);
        }}
        fetchDetails
        debounce={400}
        styles={{
          container: {
            flex: 0,
          },
          textInputContainer: {
            flex: 1,
            backgroundColor: "transparent",
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            height: 54,
            margin: 0,
            borderRadius: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            elevation: 1,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { x: 0, y: 0 },
            shadowRadius: 5,
            borderWidth: 1,
            borderColor: "#DDD",
            fontSize: 18,
          },
          listView: {
            borderWidth: 1,
            borderColor: "#DDD",
            backgroundColor: "#FFF",
            elevation: 5,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { x: 0, y: 0 },
            shadowRadius: 15,
            marginTop: 55,
          },
          description: {
            fontSize: 16,
          },
          row: {
            paddingHorizontal: 10,
            flex: 1,
            alignItems: "center",
            height: 45,
            width: 380,
          },
        }}
      />
    </View>
  );
};

export default Search;
