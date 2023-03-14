import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Api from "../Api";
import MyText from "./TextStyle/MyText";
import { useNavigation } from "@react-navigation/native";

const CatagoryCard = ({ title, image, id }) => {
  const navigation = useNavigation();
  const poster = "https://image.tmdb.org/t/p/original";
  // const [result, setResult] = useState([]);
  // const api = () => {
  //   Api.get(url)
  //     .then((res) => {
  //       setResult(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // useEffect(() => {
  //   api();
  // }, [result, url]);

  const backdrop = { uri: poster + image };
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate("Genre", { title: title, id: id });
      }}
    >
      <ImageBackground
        source={backdrop}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          borderRadius: 15,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 15,
          }}
        >
          <MyText style={{ fontWeight: "bold" }}>{title}</MyText>
          <FontAwesome5 name="angle-right" size={24} color="gray" />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CatagoryCard;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 100,
    borderRadius: 15,
    marginBottom: 20,
  },
});
