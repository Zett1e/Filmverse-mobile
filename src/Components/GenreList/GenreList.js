import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Api from "../../Api";
import GenreListCard from "./GenreListCard";
import MyText from "../TextStyle/MyText";

const GenreList = ({ url, title, type }) => {
  const [movies, setMovies] = useState([]);

  const api = () => {
    Api.get(url)
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
        renderItem={({ item }) => <GenreListCard item={item} type={type} />}
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
