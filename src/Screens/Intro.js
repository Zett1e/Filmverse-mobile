import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import MyText from "../Components/TextStyle/MyText";

const Intro = () => {
  const navigation = useNavigation();
  const ref = useRef(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    status.didJustFinish && navigation.replace("Login");
  }, [status]);

  return (
    <View style={styles.container}>
      <Video
        ref={ref}
        style={styles.backgroundVideo}
        source={require("../../assets/video/FV.mp4")}
        resizeMode="contain"
        shouldPlay
        onPlaybackStatusUpdate={setStatus}
      />
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundVideo: {
    height: 500,
    marginTop: 100,
    // width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  button: {
    width: 150,
    height: 50,
    marginTop: 20,
    // backgroundColor: "cyan",
    borderColor: "cyan",
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
