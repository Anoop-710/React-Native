import { View, Text, StyleSheet } from "react-native";
import Box from "./components/Box";
export default function App() {
  return (
    <View style={styles.container}>
      {/* Keep box 1 position as relative, and offset values top 75 and left 75 */}
      <Box
        style={{
          backgroundColor: "red",
          position: "relative",
          top: 75,
          left: 75,
        }}
      >
        Box 1
      </Box>
      <Box style={{ backgroundColor: "green", position: "relative" }}>
        Box 2
      </Box>
      <Box style={{ backgroundColor: "blue" }}>Box 3</Box>
      <Box style={{ backgroundColor: "orange", position: "absolute" }}>
        Box 4
      </Box>

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
