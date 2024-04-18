import { View, Text, StyleSheet } from "react-native";
import Box from "./components/Box";
export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red" }}>Box 1</Box>
      {/* flex: 1(for box1), flex: 3(for box2)  box 1 takes 25% of the remaining space and box 2 takes 75% */}
      {/* If box 1 and box 2 both have flex as 1 , they will share the remaining space equally */}
      <Box style={{ backgroundColor: "green" }}>Box 2</Box>
      <Box style={{ backgroundColor: "blue" }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: "orange" }}>Box 4</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 5</Box>
      <Box style={{ backgroundColor: "pink" }}>Box 6</Box>
      <Box style={{ backgroundColor: "orange" }}>Box 7</Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up all the space on the device
    alignItems: "center",
    // alignItems: "center", alignItems: "stretch", alignItems: "flex-start", alignItems: "flex-end", alignItems: "baseline",
    borderWidth: 8,
    borderColor: "lightgreen",
    borderRadius: 8,
  },
});
