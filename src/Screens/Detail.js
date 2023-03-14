import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Api from "../Api";
import { LinearGradient } from "expo-linear-gradient";
import MyText from "../Components/TextStyle/MyText";
import { FontAwesome } from "@expo/vector-icons";
import SecText from "../Components/TextStyle/SecText";
import Cast from "../Components/DetailComponents/Cast";
import Trailer from "../Components/DetailComponents/Trailer";
import SimilarMovies from "../Components/DetailComponents/SimilarMovies";

const Detail = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const { id, type } = route.params;

  const [detail, setDetail] = useState({});
  const scrollRef = useRef();

  const poster = "https://image.tmdb.org/t/p/original";

  let url;

  if (type === "movie") {
    url = `/movie/${id}`;
  } else if (type === "tv") {
    url = `/tv/${id}`;
  }

  const api = () => {
    Api.get(url)
      .then((res) => {
        setDetail(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api();
  }, [id, type]);

  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 0,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView ref={scrollRef}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5
            style={styles.backArrow}
            name="arrow-left"
            size={24}
            color="gray"
          />
        </TouchableOpacity>
        {isLoading ? (
          <View style={{ zIndex: 10, height: 200, justifyContent: "center" }}>
            <ActivityIndicator size="large" />
          </View>
        ) : detail.backdrop_path ? (
          <Image
            style={[styles.poster, { width: width }]}
            source={{ uri: poster + detail.backdrop_path }}
          />
        ) : (
          <Image
            style={{ resizeMode: "contain", height: 200 }}
            source={require("../../assets/Image/NoImage.png")}
          />
        )}
        <LinearGradient
          colors={["transparent", "#151515"]}
          locations={[0, 0.04]}
          style={styles.detailContainer}
        >
          <View style={{ marginTop: 60, marginHorizontal: 10 }}>
            <MyText style={styles.title}>
              {detail.title ? detail.title : detail.name}
            </MyText>
            <Text style={{ marginBottom: 5 }}>
              {detail.genres &&
                detail.genres.map(({ id, name }) => (
                  <SecText key={id}>{name + "  "} </SecText>
                ))}
            </Text>
            <SecText>
              <FontAwesome name="star" size={15} color="yellow" />
              <SecText style={{ fontWeight: "bold" }}>
                {" "}
                {detail.vote_average && detail.vote_average.toPrecision(2)}{" "}
              </SecText>
              &#8728;
              {detail.runtime && (
                <SecText>
                  {" "}
                  {Math.trunc(detail.runtime / 60)}hr {detail.runtime % 60}
                  min &#8728;{" "}
                </SecText>
              )}
              <SecText>
                {detail.release_date
                  ? detail.release_date.slice(0, 4)
                  : detail.first_air_date &&
                    " " + detail.first_air_date.slice(0, 4)}
              </SecText>
            </SecText>

            <SecText style={{ marginTop: 20 }}> {detail.overview} </SecText>
            <Cast id={detail.id} type={type} />
            <Trailer id={detail.id} type={type} />
            <SimilarMovies
              onPressTouch={onPressTouch}
              id={detail.id}
              type={type}
            />
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  poster: {
    aspectRatio: 1.8,
    zIndex: -1,
  },
  backArrow: {
    margin: 15,
    position: "absolute",
    top: 0,
    left: 0,
  },
  detailContainer: {
    flex: 1,
    marginTop: -50,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
