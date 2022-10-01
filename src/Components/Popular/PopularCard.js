import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { memo } from "react";
import MyText from "../TextStyle/MyText";
import Genres from "../Genres";
import { useNavigation } from "@react-navigation/native";

const PopularCard = ({ item }) => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const poster = "https://image.tmdb.org/t/p/original";

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", { id: item.id, type: "movie" })
      }
    >
      <View style={[styles.posterCotainer, { width: width - 80 }]}>
        {item.backdrop_path ? (
          <Image
            style={styles.poster}
            source={{ uri: poster + item.backdrop_path }}
          ></Image>
        ) : (
          <Image
            style={[styles.poster, { resizeMode: "stretch" }]}
            source={require("../../../assets/Image/NoImage.png")}
          />
        )}

        <View style={styles.caption}>
          <MyText style={styles.title}>
            {item.title ? item.title : item.name}
          </MyText>

          <Text>
            {item.genre_ids.map((id, i) => (
              <MyText key={i} style={styles.genres}>
                {Genres[id]}
              </MyText>
            ))}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(PopularCard);

const styles = StyleSheet.create({
  poster: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  posterCotainer: {
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 20,
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "notoserif",
  },
  genres: {
    fontSize: 10,
    fontWeight: "bold",
    fontFamily: "notoserif",
  },
  caption: {
    width: "95%",
    position: "absolute",
    left: 10,
    bottom: 10,
  },
});
