import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import MyText from "../TextStyle/MyText";
import { useNavigation } from "@react-navigation/native";

const GenreListCard = ({ item, type }) => {
  const navigation = useNavigation();
  const poster = "https://image.tmdb.org/t/p/original";
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { id: item.id, type: type })}
    >
      <View style={styles.container}>
        {item.poster_path ? (
          <Image
            style={styles.poster}
            source={{ uri: poster + item.poster_path }}
          />
        ) : (
          <Image
            style={[styles.poster, { resizeMode: "stretch" }]}
            source={require("../../../assets/Image/NoImage.png")}
          />
        )}
        <MyText style={styles.title}>
          {item.title ? item.title : item.name}
        </MyText>
      </View>
    </TouchableOpacity>
  );
};

export default memo(GenreListCard);

const styles = StyleSheet.create({
  container: {
    width: 100,
    marginLeft: 20,
    marginBottom: 15,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 13,
    textAlign: "center",
  },
});
