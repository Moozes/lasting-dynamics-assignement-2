import React from "react";
import { View, Text } from "react-native";
import useHideSplashScreenOnMount from "./src/hooks/useHideSplashScreenOnMount";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { NativeBaseProvider } from "native-base";

function App() {
  useHideSplashScreenOnMount();

  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}

export default App;
