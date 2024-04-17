import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";
import logoImage from "./assets/icon.png";
import { useState } from "react";
export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 20 }}>
      <Button
        title="Open Modal"
        onPress={() => setShowModal(true)}
        color="midnightblue"
      />
      <Modal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        animationType="slide"
        // presentationStyle="pageSheet"   only for ios
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 20 }}>
          <Text>Modal content</Text>
          <Button
            title="Close Modal"
            color="midnightblue"
            onPress={() => setShowModal(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
