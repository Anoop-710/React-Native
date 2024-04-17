import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import logoImage from "./assets/icon.png";
import { useState } from "react";
export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 20 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid Data")} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert("Invalid Data", "DOB is not valid")}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert("Invalid Data", "DOB is not valid", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ])
        }
      />
    </View>
  );
}
