import { View } from "react-native";
import { Button, Surface, Text } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <Surface>
      <Text>Bem vinde ao nosso app</Text>
      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        mode="contained"
      >
        Login
      </Button>

      {/* <Button
        onPress={() => {
          navigation.navigate("SettingsScreen");
        }}
        mode="contained"
      >
        Configurações
      </Button> */}
      
    </Surface>
  );
}
