import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyText from "../Components/MyText";
import Popular from "../Components/Popular/Popular";
import GenreList from "../Components/GenreList/GenreList";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <ScrollView>
          <Popular />
          <GenreList url={"/trending/all/day"} title={"Trending"} />
          <GenreList url={"/genre/28/movies"} title={"Action"} />
          <GenreList url={"/genre/12/movies"} title={"Adventure"} />
          <GenreList url={"/genre/16/movies"} title={"Animation"} />
          <GenreList url={"/genre/35/movies"} title={"Comedy"} />
          <GenreList url={"/tv/popular"} title={"Tv Series"} />
          <GenreList url={"/genre/80/movies"} title={"Crime"} />
          <GenreList url={"/genre/18/movies"} title={"Drama"} />
          <GenreList url={"/genre/27/movies"} title={"Horror"} />
          <GenreList url={"/genre/53/movies"} title={"Thriller"} />
          <GenreList url={"/genre/878/movies"} title={"Sci-Fi"} />
          <GenreList url={"/genre/10749/movies"} title={"Romance"} />
          <GenreList url={"/genre/14/movies"} title={"Fantasy"} />
          <GenreList url={"/genre/9648/movies"} title={"Mystery"} />
          <GenreList url={"/genre/99/movies"} title={"Documentary"} />
          <GenreList url={"/genre/10751/movies"} title={"Family"} />
          <GenreList url={"/genre/36/movies"} title={"History"} />
          <GenreList url={"/genre/10402/movies"} title={"Music"} />
          <GenreList url={"/genre/10752/movies"} title={"War"} />
          <GenreList url={"/genre/37/movies"} title={"Western"} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    marginBottom: 60,
  },
});
