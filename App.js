import { View, Text, StyleSheet } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style Inheritance
          <Text style={styles.boldText}>In Bold</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
        {/* The last element in the array gets the highest precedence */}
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
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
    width: 250,
    height: 250,
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

  // applicable for ios
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },

  // applicable for android
  androidShadow: {
    elevation: 10,
    shadowColor: "red",
  },

  // Style Inheritance
  darkMode: {
    backgroundColor: "black",
    // color: "white",  Doesn't work as inheritance from view to text is not supported
  },
  darkModeText: {
    color: "white",
  },
  boldText: {
    fontWeight: "bold", // However inheritance within text element is supported
  },
});
