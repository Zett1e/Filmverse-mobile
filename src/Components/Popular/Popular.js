import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Api from "../../Api";
import PopularCard from "./PopularCard";

const Popular = () => {
  const [movies, setMovies] = useState([]);

  const api = () => {
    Api.get("/movie/popular")
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api();
    // console.log(movies);
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(movie) => movie.id}
        renderItem={({ item }) => {
          return <PopularCard item={item} />;
        }}
      />
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({});
