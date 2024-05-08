import { useState } from 'react';
import { View } from 'react-native';
import { Button, Surface, Text, TextInput } from 'react-native-paper';
import { styles } from '../config/styles';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState({
        email: false,
        senha: false,
    });

    function realizaLogin() {
        console.log("Fazer login");
      if (email === ""){
        setErro({ ...erro, email: true});
      } else {
        setErro({ ...erro, email: false});
      }
      if (senha === ""){
        setErro({ ...erro, senha: true});
      } else {
        setErro({ ...erro, senha: false});
    }
    }

    return (
        <Surface style={styles.container}>
            <View style={styles.innerContainer}>
                <Text variant="headlineMedium" style={styles.textOla}>
                    Faça login
                </Text>
                <TextInput
                    placeholder="Digite seu email"
                    onChangeText={setEmail}
                    value={email}
                    error={erro.email}
                />
                <TextInput
                    placeholder="Digite sua senha"
                    onChangeText={setSenha}
                    value={senha}
                    error={erro.senha}
                    secureTextEntry
                />
                <Button onPress={() => realizaLogin}> Fazer Login </Button>
                <Button onPress={() => navigation.navigate("RegisterScreen")}> Faça seu cadastro </Button>
            </View>
        </Surface>
    );
}
