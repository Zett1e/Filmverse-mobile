import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";

import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./src/Components/Navigator/StackNavigator";

export default function App() {
  const MyTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "lightblue",
      background: "#1A1A1A",
      text: "#FFFFFF",
      notification: "#1A1A1A",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
