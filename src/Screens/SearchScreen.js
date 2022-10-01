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
      <ScrollView>
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
              style={{ marginLeft: 10 }}
              name="search"
              size={26}
              color={"#1A1A1A"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.resultContainer}>
          {movie.map((data) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Detail", {
                  id: data.id,
                  type: data.media_type,
                });
              }}
            >
              <View key={data.id} style={styles.movieCard}>
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
                  {" "}
                  {data.title ? data?.title : data?.name}{" "}
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
    width: "90%",
    backgroundColor: "gray",
    borderRadius: 20,
  },
  resultContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 15,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  textInput: {
    width: "85%",
    height: 40,
    paddingHorizontal: 20,
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
});
