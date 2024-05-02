import { View } from "react-native";
import { Button, Surface, Text } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <Surface>
      <Text>Bem vinda(o) ao nosso app</Text>
      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        mode="contained"
      >
        Login
      </Button>
    </Surface>
  );
}
