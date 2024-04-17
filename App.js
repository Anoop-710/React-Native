import { View, Text, StyleSheet } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>StyleSheet API</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
});
