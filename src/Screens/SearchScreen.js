import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyText from "../Components/TextStyle/MyText";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Api from "../Api";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const [inputText, setInputText] = useState("");
  const [movie, setMovie] = useState([]);
  const navigation = useNavigation();
  const poster = "https://image.tmdb.org/t/p/original";
  let url = `/search/multi?query=${inputText}`;

  const api = () => {
    Api.get(url)
      .then((res) => {
        setMovie(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5
            style={styles.backArrow}
            name="arrow-left"
            size={24}
            color="gray"
          />
        </TouchableOpacity>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Search"
            onEndEditing={() => {
              api();
            }}
          />
          <TouchableOpacity
            onPress={() => {
              api();
            }}
          >
            <FontAwesome
              style={{ marginLeft: 0 }}
              name="search"
              size={26}
              color={"#1A1A1A"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.resultContainer}>
          {movie.map((data) => (
            <TouchableOpacity
              key={data.id}
              onPress={() => {
                navigation.navigate("Detail", {
                  id: data.id,
                  type: data.media_type,
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "gray",
    borderRadius: 20,
  },
  textInput: {
    width: "85%",
    height: 40,
    paddingHorizontal: 20,
  },
  resultContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 15,
    justifyContent: "space-between",
    marginBottom: 20,
  },

  poster: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  movieCard: {
    width: 100,
    alignSelf: "flex-start",
    marginTop: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 13,
  },
  backArrow: {
    marginTop: 20,
    marginRight: 15,
    marginLeft: 10,
  },
});
