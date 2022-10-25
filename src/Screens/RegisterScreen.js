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
import React, { useState } from "react";
import MyText from "../Components/TextStyle/MyText";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const signUpHandler = async () => {
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
    } catch (err) {
      Alert.alert("Sign Up Fail", err.message.slice(10), [
        {
          text: "OK",
          onPress: () => {
            console.log("OK pressed");
          },
        },
      ]);
    }
  };

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
        <View style={styles.inputContainer}>
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
        <View style={styles.inputContainer}>
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
        <View style={styles.inputContainer}>
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
            placeholder="Confirm Password"
            placeholderTextColor={"#888"}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity onPress={signUpHandler}>
          <View style={styles.button}>
            <MyText>Sign Up</MyText>
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
          <MyText>Already have an account? </MyText>
          <TouchableOpacity
            style={{ marginTop: 5 }}
            onPress={() => {
              navigation.replace("Login");
            }}
          >
            <MyText
              style={{
                fontWeight: "bold",
                color: "cyan",
                marginBottom: 5,
              }}
            >
              Sign In
            </MyText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
