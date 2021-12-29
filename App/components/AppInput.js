import React from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import AppColors from "../config/AppColors";
const AppInput = ({
  icon,
  placeholder = "Type Anthing!",
  color = "black",
  size = 20,
  backgroundColor = "#f3f3ff",
}) => {
  return (
    <View style={[styles.AppInputContainer, { backgroundColor }]}>
      {icon && (
        <FontAwesome
          name={icon}
          size={size}
          color={color}
          style={styles.icon}
        />
      )}
      <TextInput placeholder={placeholder} style={{ color: AppColors.black }} />
    </View>
  );
};

export default AppInput;
