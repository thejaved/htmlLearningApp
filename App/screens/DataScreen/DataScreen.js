import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import React from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import AppColors from "../../config/AppColors";

const DataScreen = ({ route, navigation }) => {
  const { title, source, authorName } = route.params.items;

  const [loaded] = useFonts({
    Raleway: require("../../assets/fonts/Raleway-ExtraBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <ScrollView>
        <TouchableOpacity
          style={{
            marginRight: 10,
            position: "absolute",
            top: 20,
            left: 20,
            zIndex: 5,
          }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name={"arrow-left"} size={25} color={AppColors.white} />
        </TouchableOpacity>
        <Image
          source={{ uri: source }}
          style={{
            width: "100%",
            height: 250,
            resizeMode: "cover",
            zIndex: -1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        />
        <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
          <Text style={{ fontSize: 30, fontFamily: "Raleway" }}>{title}</Text>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 5,
              }}
            >
              <FontAwesome
                name={"user"}
                size={20}
                color={AppColors.primary}
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  fontFamily: "Josefin",
                  color: AppColors.black,
                  fontSize: 15,
                }}
              >
                {authorName}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                height: 2,
                backgroundColor: AppColors.secondary,
                marginTop: 5,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default DataScreen;
