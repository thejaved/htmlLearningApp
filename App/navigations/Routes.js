import React from "react";
import AppStacks from "./AppStacks";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./BottomTabs";

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStacks />
    </NavigationContainer>
  );
};

export default Routes;
