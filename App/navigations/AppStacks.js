import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import { DataScreen } from "../screens";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Bottom Tabs" component={BottomTabs} />
      <Stack.Screen name="DataScreen" component={DataScreen} />
    </Stack.Navigator>
  );
}
export default MyStack;
