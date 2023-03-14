import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SelectList from "react-native-dropdown-select-list";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const DropdownHeader = () => {
  const [selected, setSelected] = React.useState("Movie");
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(["Movie", "Tv Series"]);
  }, []);

  return (
    <View style={{ alignSelf: "flex-start" }}>
      <SelectList
        setSelected={setSelected}
        data={data}
        search={false}
        boxStyles={{
          borderWidth: 0,
          //   width: "auto",
          //   minWidth: 150,
          //   marginLeft: 16,
        }}
        inputStyles={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 25,
        }}
        dropdownStyles={{ borderWidth: 1, marginTop: -10 }}
        dropdownTextStyles={{ color: "#fff" }}
        placeholder={selected}
        arrowicon={
          <FontAwesome
            style={{ marginTop: 15, marginLeft: 10 }}
            name="chevron-down"
            size={15}
            color="white"
          />
        }
      />
    </View>
  );
};

export default DropdownHeader;

const styles = StyleSheet.create({});
