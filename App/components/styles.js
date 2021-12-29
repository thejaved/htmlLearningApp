import React from "react";
import { StyleSheet } from "react-native";
import AppColors from "../config/AppColors";
const styles = StyleSheet.create({
  AppButton: {
    width: "100%",
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
  AppButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  AppInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
  },
  icon: {
    marginRight: 10,
    color: AppColors.grey,
  },
  BodyIcons: {
    backgroundColor: "#00000050",
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
  CardsContainer: {
    width: 180,
    height: 160,
    backgroundColor: AppColors.white,
    borderRadius: 20,
    marginHorizontal: 5,
    shadowColor: AppColors.primary,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 1,
    overflow: "hidden",
  },
  TopHeader1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
export default styles;
