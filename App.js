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
import Greet from "./components/Greet";
export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 20 }}>
      <Greet name="Bruce Wayne" />
    </View>
  );
}
