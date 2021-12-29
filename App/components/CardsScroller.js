import React from "react";
import { ScrollView, View } from "react-native";
import CardsData from "../data/CardsData";
import Cards from "./Cards";

const CardsScroller = ({ navigation }) => {
  return (
    <View style={{ height: 180, marginTop: 20 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {CardsData.map((items) => {
          const { key, icon, authorName, title, source } = items;
          return (
            <Cards
              key={key}
              title={title}
              authorName={authorName}
              icon={icon}
              source={{ uri: source }}
              onPress={() => navigation.navigate("DataScreen", { items })}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CardsScroller;
