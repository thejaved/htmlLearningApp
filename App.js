import React from "react";
import { StatusBar } from "react-native";
import AppColors from "./App/config/AppColors";
import Routes from "./App/navigations/Routes";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={AppColors.primary} />
      <Routes />
    </>
  );
};

export default App;
