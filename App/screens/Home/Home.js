import React from "react";
import { ScrollView, Text, View } from "react-native";
import Styles from "./Styles";
import AppInput from "../../components/AppInput";
import AppColors from "../../config/AppColors";
import { useFonts } from "expo-font";
import BodyIcons from "../../components/BodyIcons";
import CardsScroller from "../../components/CardsScroller";
import SeeAll from "../../components/SeeAll";

const Home = ({ navigation }) => {
  const [loaded] = useFonts({
    Pushster: require("../../assets/fonts/Pushster-Regular.ttf"),
    Poppins: require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    Josefin: require("../../assets/fonts/JosefinSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={Styles.HomeContainer}>
      <View style={Styles.TopContainer}>
        <View style={Styles.TopDetailsContainer}>
          <View>
            <Text
              style={{
                fontSize: 30,
                color: AppColors.white,
                fontFamily: "Pushster",
              }}
            >
              Hi, Javed 👋
            </Text>
            <Text
              style={{
                color: AppColors.white,
                fontFamily: "Poppins",
              }}
            >
              Let's start Learning!
            </Text>
          </View>
          <View style={Styles.TopIconContainer}>
            <BodyIcons icon="shopping-bag" onPress={() => alert("Shopping!")} />
            <BodyIcons onPress={() => alert("Bell!")} />
          </View>
        </View>
        <AppInput icon={"search"} />
      </View>
      <View style={{ paddingVertical: 10 }}>
        <SeeAll title={"Basic Of Html"} seeAllText={"See All"} />
        <CardsScroller navigation={navigation} />
      </View>
      <View>
        <SeeAll title={"Advance Of Html"} seeAllText={"See All"} />
        <CardsScroller navigation={navigation} />
      </View>
    </View>
  );
};

export default Home;
