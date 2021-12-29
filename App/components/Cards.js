import { useFonts } from "expo-font";
import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import AppColors from "../config/AppColors";

const Cards = ({ onPress, title, authorName, icon, source }) => {
  const [loaded] = useFonts({
    Raleway: require("../assets/fonts/Raleway-ExtraBold.ttf"),
    Josefin: require("../assets/fonts/JosefinSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.CardsContainer}>
        <View>
          <Image
            source={source}
            style={{
              resizeMode: "cover",
              width: "100%",
              height: 100,
              borderRadius: 10,
            }}
          />
        </View>
        <View style={{ padding: 8 }}>
          <Text style={{ fontFamily: "Raleway" }} numberOfLines={1}>
            {title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 5,
            }}
          >
            <FontAwesome
              name={icon}
              size={13}
              color={AppColors.grey}
              style={{ marginRight: 5 }}
            />
            <Text
              style={{
                fontFamily: "Josefin",
                color: AppColors.primary,
                fontSize: 10,
              }}
            >
              {authorName}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Cards;
