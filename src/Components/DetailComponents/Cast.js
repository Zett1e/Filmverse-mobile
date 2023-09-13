import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import MyText from "../TextStyle/MyText";
import Api from "../../Api";
import SecText from "../TextStyle/SecText";

const Cast = ({ id, type }) => {
  const [credit, setCredit] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const poster = "https://image.tmdb.org/t/p/original";

  let url;

  if (type === "movie") {
    url = `/movie/${id}/credits`;
  } else if (type === "tv") {
    url = `/tv/${id}/credits`;
  }

  const api = () => {
    Api.get(url)
      .then((res) => {
        setCredit(res.data.cast);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api();
  }, [id, type]);

  return (
    <View style={{ marginTop: 20 }}>
      <MyText style={{ fontSize: 20 }}>Cast</MyText>

      {isLoading ? (
        <ActivityIndicator />
      ) : credit.length ? (
        <FlatList
          data={credit.slice(0, 11)}
          horizontal
          keyExtractor={(cast) => cast.id}
          renderItem={({ item }) => (
            <View style={{ marginRight: 15, marginTop: 10, width: 60 }}>
              <View>
                {item.profile_path ? (
                  <Image
                    style={styles.cast}
                    source={{ uri: poster + item?.profile_path }}
                  />
                ) : (
                  <Image
                    style={[
                      styles.cast,
                      {
                        resizeMode: "contain",
                        backgroundColor: "#3A3A3A",
                      },
                    ]}
                    source={require("../../../assets/Image/user.png")}
                  />
                )}
                <SecText style={{ fontSize: 10, textAlign: "center" }}>
                  {item?.name}
                </SecText>
              </View>
            </View>
          )}
        />
      ) : (
        <MyText style={{ textAlign: "center" }}>
          No Cast Available To Show
        </MyText>
      )}
    </View>
  );
};

export default Cast;

const styles = StyleSheet.create({
  cast: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
