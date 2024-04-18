import { View, Text, StyleSheet } from "react-native";
import Box from "./components/Box";
export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red" }}>Box 1</Box>
      <Box style={{ backgroundColor: "green" }}>Box 2</Box>
      <Box style={{ backgroundColor: "blue" }}>Box 3</Box>
      <Box style={{ backgroundColor: "orange" }}>Box 4</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 5</Box>
      <Box style={{ backgroundColor: "pink" }}>Box 6</Box>
      <Box style={{ backgroundColor: "gray" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexWrap: "wrap", flexWrap: "nowrap", flexWrap: "wrap-reverse",
    flexWrap: "wrap",
    height: 300,
    borderWidth: 6,
    borderColor: "lightgreen",
    borderRadius: 8,
    marginTop: 64,
    // flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap-reverse",
  },
});
