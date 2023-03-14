import {
  ActivityIndicator,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import MyText from "../TextStyle/MyText";
import WebView from "react-native-webview";
import Api from "../../Api";

const Trailer = ({ id, type }) => {
  const [trailer, setTrailer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let trailerKey;
  let url;

  if (type === "movie") {
    url = `/movie/${id}/videos`;
  } else if (type === "tv") {
    url = `tv/${id}/videos`;
  }

  const api = () => {
    Api.get(url)
      .then((res) => {
        setTrailer(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api();
  }, [id]);

  trailer.map((data) => {
    if (data.type === "Trailer") {
      trailerKey = data.key;
    }
  });

  return (
    <View style={{ marginTop: 20 }}>
      <MyText style={{ fontSize: 20 }}>Official Trailer</MyText>
      <View style={[styles.container]}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : trailerKey ? (
          <WebView
            style={{ borderRadius: 5 }}
            source={{ uri: `https://www.youtube.com/embed/${trailerKey}` }}
          />
        ) : (
          <MyText style={{ textAlign: "center" }}>No Trailer Available</MyText>
        )}
      </View>
    </View>
  );
};

export default Trailer;

const styles = StyleSheet.create({
  container: {
    height: 190,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: "center",
    // marginHorizontal: 20,
  },
});
