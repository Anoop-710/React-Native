import { View, Text, StyleSheet } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg]}>
        {/* The last element in the array gets the highest precedence */}
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
        <Text>Lightgreen box</Text>
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
  box: {
    width: "25%",
    height: "25%",
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 40,
    marginVertical: 10,
    marginHorizontal: 40,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 24,
    // Border radius cannot be applied for TExt in IOS but in android it's possible
  },

  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
});
