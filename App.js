import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import logoImage from "./assets/icon.png";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 20 }}>
      <ScrollView>
        <Image
          source={logoImage}
          style={{ width: 200, height: 200, alignSelf: "center" }}
        />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae facilis optio maxime fuga! Sit omnis consectetur,
          praesentium vero ea rem, eum illum provident, aperiam aliquid
          necessitatibus itaque ad quisquam! Atque repellat aliquam quod velit
          tenetur debitis. Qui, accusantium. Harum error nostrum omnis velit
          expedita tempore molestiae voluptatibus minima? Quod quibusdam est
          voluptatem aut dolores fugiat, sunt sit placeat nemo. Vitae inventore
          nemo provident quam, error explicabo consequuntur quis impedit
          corporis dolore culpa praesentium, beatae reprehenderit atque dolores
          minus dolorem aspernatur tempora nihil nostrum? Culpa non placeat sint
          quaerat maiores. Atque voluptas fugiat adipisci eaque labore ipsa at,
          nulla culpa. Doloribus cupiditate, cum mollitia aut, nobis fuga modi
          inventore aperiam dicta natus beatae nisi temporibus ut enim maxime
          assumenda. Deserunt. Dolorum, optio consectetur! Illo at aperiam
          sapiente cum totam rem cumque cupiditate inventore aut minima officiis
          veniam eveniet vitae delectus voluptatem consequatur eaque
          voluptatibus deserunt, perferendis necessitatibus sed, maiores nihil!
        </Text>
        <Image
          source={logoImage}
          style={{ width: 200, height: 200, alignSelf: "center" }}
        />
      </ScrollView>
    </View>
  );
}
