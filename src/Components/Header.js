import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ children }) => {
  return (
    <View style={styles.header}>
      {children}

      <FontAwesome
        style={{ marginRight: 10 }}
        name="search"
        size={26}
        color={"gray"}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },
});
