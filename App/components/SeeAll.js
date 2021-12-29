import { useFonts } from "expo-font";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AppColors from "../config/AppColors";
import styles from "./styles";

const SeeAll = ({ title, seeAllText, onPress }) => {
  const [loaded] = useFonts({
    Pushster: require("../assets/fonts/Pushster-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-ExtraLight.ttf"),
    Josefin: require("../assets/fonts/JosefinSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.TopHeader1}>
      <Text style={{ fontFamily: "Josefin", fontSize: 15 }}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: AppColors.primary,
            fontFamily: "Josefin",
            fontSize: 15,
          }}
        >
          {seeAllText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SeeAll;
