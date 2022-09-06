import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Api from "../../Api";
import GenreListCard from "./GenreListCard";
import MyText from "../MyText";

const GenreList = ({ url, title }) => {
  const [movies, setMovies] = useState([]);

  const api = async () => {
    await Api.get(url)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <View>
      <MyText style={styles.title}>{title}</MyText>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={20}
        data={movies}
        keyExtractor={(d) => d.id}
        renderItem={({ item }) => <GenreListCard item={item} />}
      />
    </View>
  );
};

export default GenreList;

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 20,
  },
});
