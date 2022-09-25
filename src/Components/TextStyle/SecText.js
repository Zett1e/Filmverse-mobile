import { StyleSheet, Text, View } from "react-native";

const SecText = ({ children, style }) => {
  return (
    <Text style={[{ fontFamily: "Roboto", color: "#78808c" }, style]}>
      {children}
    </Text>
  );
};

export default SecText;
