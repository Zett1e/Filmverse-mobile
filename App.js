import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";

import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/Components/Navigator";

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
      <Navigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
