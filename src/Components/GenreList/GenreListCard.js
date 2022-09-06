import { Image, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import MyText from "../MyText";

const GenreListCard = ({ item }) => {
  const poster = "https://image.tmdb.org/t/p/original";
  return (
    <View style={styles.container}>
      <Image
        style={styles.poster}
        source={{ uri: poster + item.poster_path }}
      />
      <MyText style={styles.title}>
        {item.title ? item.title : item.name}
      </MyText>
    </View>
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
