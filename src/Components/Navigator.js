import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import WatchList from "../Screens/WatchList";
import Profile from "../Screens/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import Category from "../Screens/Category";
import Header from "./Header";
import MyText from "./MyText";

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // contentStyle: { backgroundColor: "#1A1A1A" },
        tabBarShowLabel: false,
        // headerShown: false,
        headerStyle: {
          backgroundColor: "#1A1A1A",
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: "lightblue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#0A0A0A",
          position: "absolute",
          bottom: 10,
          marginHorizontal: 20,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOpacity: 1,
          shadowOffset: {
            width: 20,
            height: 20,
          },
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Header>
              <Image
                style={styles.logo}
                source={require("../../assets/Logo/filmverse_black.png")}
              />
            </Header>
          ),

          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={26}
              color={focused ? "#00ffec" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          headerTitle: () => (
            <Header>
              <MyText style={styles.title}>Category</MyText>
            </Header>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="list"
              size={24}
              color={focused ? "#00ffec" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WatchList"
        component={WatchList}
        options={{
          headerTitle: () => (
            <Header>
              <MyText style={styles.title}>Watchlist</MyText>
            </Header>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="bookmark"
              size={24}
              color={focused ? "#00ffec" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: () => (
            <Header>
              <MyText style={styles.title}>Profile</MyText>
            </Header>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              size={24}
              color={focused ? "#00ffec" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  logo: {
    width: "50%",
    height: "50%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
