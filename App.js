import { View, Text, StyleSheet } from "react-native";
import Box from "./components/Box";
export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red", flexGrow: 1 }}>Box 1</Box>
      <Box style={{ backgroundColor: "green", flexGrow: 3 }}>Box 2</Box>
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
    flex: 1,
    borderWidth: 6,
    borderColor: "lightgreen",
    marginTop: 64,
  },
});
