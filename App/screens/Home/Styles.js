import { StyleSheet } from "react-native";
import AppColors from "../../config/AppColors";

const Styles = StyleSheet.create({
  HomeContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: AppColors.blueWhite,
  },
  TopContainer: {
    width: "100%",
    height: 200,
    backgroundColor: AppColors.primary,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    paddingHorizontal: 30,
  },
  TopDetailsContainer: {
    width: "100%",
    height: "60%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  TopIconContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default Styles;
