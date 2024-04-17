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
} from "react-native";
import logoImage from "./assets/icon.png";
import { useState } from "react";
export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 20 }}>
      <Button
        title="Show status bar"
        onPress={() => setShowStatusBar(!showStatusBar)}
      />
      <StatusBar
        backgroundColor="lightgreen"
        barStyle="dark-content"
        hidden={showStatusBar}
      />
    </View>
  );
}
