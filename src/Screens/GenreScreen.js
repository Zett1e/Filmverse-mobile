import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyText from "../Components/TextStyle/MyText";
import { useNavigation } from "@react-navigation/native";
import Api from "../Api";

const GenreScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title, id } = route.params;
  const [movies, setMovies] = useState([]);
  const poster = "https://image.tmdb.org/t/p/original";
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const { width, height } = useWindowDimensions();

  const api = () => {
    Api.get(`/genre/${id}/movies?page=${currentPage}`)
      .then((res) => {
        setMovies([...movies, ...res.data.results]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api();
    navigation.setOptions({ title: title });
  }, [id, currentPage]);

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  // onMomentScrollEnd = {(e)=>{
  //   const windowHeight = e.layoutMeasurement.height;
  //   const offset = e.contentOffset.y;
  //   const contentHeight = e.contentSize.height;
  //     if(windowHeight+offset >= contentHeight-20){
  //       setIsLoading(true)
  //     }
  // }}

  return (
    <ScrollView
      removeClippedSubviews={true}
      onMomentumScrollEnd={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          setIsLoading(true);
          setCurrentPage(currentPage + 1);
        }
      }}
    >
      <View style={styles.resultContainer}>
        {movies.map((data) => (
          <TouchableOpacity
            key={data.id}
            onPress={() => {
              navigation.navigate("Detail", {
                id: data.id,
                type: "movie",
              });
            }}
          >
            <View style={styles.movieCard}>
              {data.poster_path ? (
                <Image
                  style={styles.poster}
                  source={{ uri: poster + data.poster_path }}
                />
              ) : (
                <Image
                  style={[styles.poster, { resizeMode: "stretch" }]}
                  source={require("../../assets/Image/NoImage.png")}
                />
              )}

              <MyText style={styles.title}>
                {data.title ? data?.title : data?.name}
              </MyText>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {isLoading ? <ActivityIndicator size="large" /> : null}
    </ScrollView>
  );
};

export default GenreScreen;

const styles = StyleSheet.create({
  resultContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 15,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  movieCard: {
    width: 100,
    marginTop: 20,
    marginRight: 15,
  },
  poster: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 13,
  },
});
