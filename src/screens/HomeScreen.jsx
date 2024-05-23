import { Button, Surface, Text } from "react-native-paper";
import { styles } from "../config/styles";

export default function HomeScreen({ navigation }) {
  return (
    <Surface style={styles.ola}>
      <Text>Bem vinde ao nosso app</Text>
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
