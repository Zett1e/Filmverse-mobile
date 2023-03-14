import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import MyText from "../Components/TextStyle/MyText";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const signInHandler = async () => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
    } catch (err) {
      Alert.alert("Login Fail", err.message.slice(10), [
        {
          text: "OK",
          onPress: () => {
            console.log("OK pressed");
          },
        },
      ]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("HomeScreen");
      }
    });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "90%",
          width: "90%",
          marginTop: 40,
        }}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/Logo/filmverse_black.png")}
        />
        <View style={styles.inpurContainer}>
          <MaterialCommunityIcons
            style={{
              marginBottom: 20,
              marginRight: 10,
            }}
            name="email-outline"
            size={20}
            color="white"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            placeholderTextColor={"#888"}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inpurContainer}>
          <MaterialCommunityIcons
            style={{
              marginBottom: 20,
              marginRight: 10,
            }}
            name="lock-outline"
            size={20}
            color="white"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            placeholderTextColor={"#888"}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity onPress={signInHandler}>
          <View style={styles.button}>
            <MyText>Sign In</MyText>
          </View>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MyText>Don't have an account? </MyText>
          <TouchableOpacity
            style={{ marginTop: 5 }}
            onPress={() => {
              navigation.replace("Register");
            }}
          >
            <MyText
              style={{
                fontWeight: "bold",
                color: "cyan",
                marginBottom: 5,
              }}
            >
              Sign Up
            </MyText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: "80%",
    marginBottom: 70,
  },
  button: {
    width: 150,
    height: 50,
    marginTop: 50,
    borderColor: "cyan",
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    color: "#fff",
    marginLeft: -30,
    paddingLeft: 30,
  },
  inpurContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
