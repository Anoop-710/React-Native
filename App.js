import { View, Text, StyleSheet } from "react-native";
import Box from "./components/Box";
export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red", alignSelf: "flex-start" }}>
        Box 1
      </Box>

      <Box style={{ backgroundColor: "green", alignSelf: "flex-end" }}>
        Box 2
      </Box>
      <Box style={{ backgroundColor: "blue", alignSelf: "center" }}>Box 3</Box>
      <Box style={{ backgroundColor: "orange", alignSelf: "stretch" }}>
        Box 4
      </Box>
      <Box style={{ backgroundColor: "purple", alignSelf: "baseline" }}>
        Box 5
      </Box>
      {/* align self defaults to auto and the "auto" property is dependent on the alignItems as given below  */}
      <Box style={{ backgroundColor: "pink" }}>Box 6</Box>
      <Box style={{ backgroundColor: "gray" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up all the space on the device
    alignItems: "flex-end",
    borderWidth: 8,
    borderColor: "lightgreen",
    borderRadius: 8,
  },
});
