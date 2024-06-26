import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../config/firebase";
import { ActivityIndicator, Surface } from "react-native-paper";
import { styles } from "../config/styles";
import { queryEqual } from "firebase/firestore";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Checar se o usuário já está logado no Firebase Authentication
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuário logado", user);
        navigation.navigate("HomeScreen");
      } else {
        console.log("Usuário não logados");
        navigation.navigate("LoginScreen");
      }
    });
  }, []);
  
  return (
    <Surface style={styles.container}>
      <ActivityIndicator size={"large"} />
    </Surface>
  );
}
