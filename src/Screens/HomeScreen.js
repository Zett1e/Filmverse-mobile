import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyText from "../Components/TextStyle/MyText";
import Popular from "../Components/Popular/Popular";
import GenreList from "../Components/GenreList/GenreList";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <ScrollView>
          <Popular />
          <GenreList
            url={"/trending/movie/day"}
            title={"Trending"}
            type={"movie"}
          />
          <GenreList url={"/genre/28/movies"} title={"Action"} type={"movie"} />
          <GenreList
            url={"/genre/12/movies"}
            title={"Adventure"}
            type={"movie"}
          />
          <GenreList
            url={"/genre/16/movies"}
            title={"Animation"}
            type={"movie"}
          />
          <GenreList url={"/genre/35/movies"} title={"Comedy"} type={"movie"} />
          <GenreList url={"/tv/popular"} title={"Tv Series"} type={"tv"} />
          {/* <GenreList url={"/genre/80/movies"} title={"Crime"} type={"movie"} /> */}
          <GenreList url={"/genre/18/movies"} title={"Drama"} type={"movie"} />
          <GenreList url={"/genre/27/movies"} title={"Horror"} type={"movie"} />
          <GenreList
            url={"/genre/53/movies"}
            title={"Thriller"}
            type={"movie"}
          />
          <GenreList
            url={"/genre/878/movies"}
            title={"Sci-Fi"}
            type={"movie"}
          />
          {/* <GenreList url={"/genre/10749/movies"} title={"Romance"} type={'movie'}/> */}
          <GenreList
            url={"/genre/14/movies"}
            title={"Fantasy"}
            type={"movie"}
          />
          {/* <GenreList url={"/genre/9648/movies"} title={"Mystery"} type={'movie'}/> */}
          {/* <GenreList url={"/genre/99/movies"} title={"Documentary"} type={'movie'}/> */}
          {/* <GenreList
            url={"/genre/10751/movies"}
            title={"Family"}
            type={"movie"}
          /> */}
          {/* <GenreList url={"/genre/36/movies"} title={"History"} type={'movie'}/> */}
          {/* <GenreList url={"/genre/10402/movies"} title={"Music"} type={'movie'}/> */}
          {/* <GenreList url={"/genre/10752/movies"} title={"War"} type={"movie"} /> */}
          {/* <GenreList url={"/genre/37/movies"} title={"Western"} type={'movie'}/> */}
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
