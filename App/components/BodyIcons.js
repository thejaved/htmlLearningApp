import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
const BodyIcons = ({ onPress, icon = "bell" }) => {
  return (
    <TouchableOpacity style={styles.BodyIcons} onPress={onPress}>
      <FontAwesome name={icon} size={20} color={"#fff"} />
    </TouchableOpacity>
  );
};

export default BodyIcons;
