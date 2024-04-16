import { View, Text, Image, ImageBackground } from "react-native";
import logoImage from "./assets/icon.png";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Text>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
          Hello
        </Text>
        World
      </Text>

      {/* <Image
        source={logoImage}
        style={{ width: 200, height: 200, alignSelf: "center" }}
      />
      <Image
        source={{ uri: "https://picsum.photos/500" }}
        style={{ width: 200, height: 200, alignSelf: "center" }}
      /> */}

      <ImageBackground
        source={{ uri: "https://picsum.photos/600" }}
        style={{ flex: 1 }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Image text
        </Text>
      </ImageBackground>
    </View>
  );
}
