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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "plum",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   lightblueBox: {
//     width: 100,
//     height: 100,
//     padding: 10,
//     backgroundColor: "lightblue",
//   },
//   lightgreenBox: {
//     width: 100,
//     height: 100,
//     padding: 10,
//     backgroundColor: "lightgreen",
//   },
// });

//Refactor the code

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
});
