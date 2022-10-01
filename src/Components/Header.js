import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require("../../assets/Logo/filmverse_black.png")}
      />

      <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
        <FontAwesome
          style={{ marginRight: 10 }}
          name="search"
          size={26}
          color={"gray"}
        />
      </TouchableOpacity>
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
  logo: {
    width: "50%",
    height: 40,
  },
});
