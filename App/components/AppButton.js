import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import AppColors from "../config/AppColors";
import styles from "./styles";

const AppButton = ({ title, style, onPress = () => {} }) => {
  return (
    <TouchableHighlight
      style={[styles.AppButton, style]}
      underlayColor={AppColors.primary}
      onPress={onPress}
    >
      <Text style={styles.AppButtonText}>{title}</Text>
    </TouchableHighlight>
  );
};

export default AppButton;
