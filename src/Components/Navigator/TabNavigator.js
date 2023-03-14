import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../Screens/HomeScreen";
import WatchList from "../../Screens/WatchList";
import Profile from "../../Screens/Profile";

import { FontAwesome } from "@expo/vector-icons";
import Category from "../../Screens/Category";
import Header from "../Header";
import MyText from "../TextStyle/MyText";
import DropdownHeader from "../DropdownHeader";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,

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
          headerTitle: () => <Header />,
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
          // headerTitle: () => <DropdownHeader />,
          headerShown: false,
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
          headerTitle: () => <MyText style={styles.title}>Watchlist</MyText>,
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
          headerTitle: () => <MyText style={styles.title}>Profile</MyText>,
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

export default TabNavigator;

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
