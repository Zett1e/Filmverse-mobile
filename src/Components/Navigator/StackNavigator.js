import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Detail from "../../Screens/Detail";
import TabNavigator from "./TabNavigator";
import SearchScreen from "../../Screens/SearchScreen";
import Intro from "../../Screens/Intro";
import LoginScreen from "../../Screens/LoginScreen";
import RegisterScreen from "../../Screens/RegisterScreen";
import GenreScreen from "../../Screens/GenreScreen";

const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="HomeScreen" component={TabNavigator} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="Genre"
        component={GenreScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#1A1A1A" },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
