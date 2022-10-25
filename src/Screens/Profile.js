import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyText from "../Components/TextStyle/MyText";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => {
        Alert.alert("Sign Out Fail", err.message.slice(10), [
          {
            text: "OK",
            onPress: () => {
              console.log("OK pressed");
            },
          },
        ]);
      });
  };

  return (
    <SafeAreaView>
      <View>
        <Button onPress={signOutHandler} title="Sign Out" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
