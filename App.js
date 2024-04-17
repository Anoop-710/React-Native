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
} from "react-native";
import logoImage from "./assets/icon.png";
import { useState } from "react";
export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 20 }}>
      <ActivityIndicator />
      <ActivityIndicator size={"large"} />
      <ActivityIndicator size={"large"} color={"midnightblue"} />
      <ActivityIndicator
        size={"large"}
        color={"midnightblue"}
        animating={false}
      />
    </View>
  );
}
