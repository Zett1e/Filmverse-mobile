import { StyleSheet, Text, View } from "react-native";

const MyText = ({ children, style }) => {
  return (
    <Text style={[{ fontFamily: "Roboto", color: "#FFFF" }, style]}>
      {children}
    </Text>
  );
};

export default MyText;
