import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";
import logoImage from "./assets/icon.png";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 20 }}>
      <Button
        title="Press"
        onPress={() => console.log("Pressed")}
        color="midnightblue"
        disabled
      />
    </View>
  );
}
