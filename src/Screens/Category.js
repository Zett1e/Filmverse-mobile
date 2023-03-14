import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MyText from "../Components/TextStyle/MyText";
import { SafeAreaView } from "react-native-safe-area-context";
import CatagoryCard from "../Components/CatagoryCard";
import DropdownHeader from "../Components/DropdownHeader";

const Category = () => {
  return (
    <SafeAreaView>
      <DropdownHeader />
      <ScrollView removeClippedSubviews={true}>
        <View style={{ alignItems: "center", marginBottom: 40, marginTop: 10 }}>
          <CatagoryCard
            title={"Action"}
            image={"/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg"}
            id={28}
          />
          <CatagoryCard
            title={"Adventure"}
            image={"/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg"}
            id={"12"}
          />
          <CatagoryCard
            title={"Animation"}
            image={"/zSWkLXXj26IQ3pFDH1rnXDQZxAu.jpg"}
            id={"16"}
          />
          <CatagoryCard
            title={"Comedy"}
            image={"/vaVaNrscmsG8CUKYxiwZGFNqGJo.jpg"}
            id={"35"}
          />
          <CatagoryCard
            title={"Crime"}
            image={"/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"}
            id={"80"}
          />
          <CatagoryCard
            title={"Documentary"}
            image={"/mfHGky2vKq4XpsdiBX2QWl4F9Jc.jpg"}
            id={"99"}
          />
          <CatagoryCard
            title={"Drama"}
            image={"/wyv2Y9vXYJwJzF6cNVuVwVOsOUj.jpg"}
            id={"18"}
          />
          <CatagoryCard
            title={"Family"}
            image={"/mRQnw1tQZDxgsE4BYVtzcOyhrIJ.jpg"}
            id={"10751"}
          />
          <CatagoryCard
            title={"Fantasy"}
            image={"/hziiv14OpD73u9gAak4XDDfBKa2.jpg"}
            id={"14"}
          />
          <CatagoryCard
            title={"History"}
            image={"/zb6fM1CX41D9rF9hdgclu0peUmy.jpg"}
            id={"36"}
          />
          <CatagoryCard
            title={"Horror"}
            image={"/z373CWiIJtekuEd90Dge2YgS4La.jpg"}
            id={"27"}
          />
          <CatagoryCard
            title={"Music"}
            image={"/askg3SMvhqEl4OL52YuvdtY40Yb.jpg"}
            id={"10402"}
          />
          <CatagoryCard
            title={"Mystery"}
            image={"/veXdzn7LL0bFIDGmE7tTkvRg0qV.jpg"}
            id={"9648"}
          />
          <CatagoryCard
            title={"Romance"}
            image={"/iQlJyRecJeGGzQGT2rEcyAgz89F.jpg"}
            id={"10749"}
          />
          <CatagoryCard
            title={"Science Fiction"}
            image={"/46LvLzMD19tzyoPc7HUf4PPvi62.jpg"}
            id={"878"}
          />
          <CatagoryCard
            title={"Thriller"}
            image={"/bvTmwkF1rAVncrQz1zIASiVNdzm.jpg"}
            id={"53"}
          />
          <CatagoryCard
            title={"War"}
            image={"/pNHv41t8Im8wlwgdzMK9I8WpuBZ.jpg"}
            id={"10752"}
          />
          <CatagoryCard
            title={"Western"}
            image={"/upOi9aVqPPky7Ba4GsiyFdjc82I.jpg"}
            id={"37"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({});
