import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { styles } from '../config/styles';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function realizaLogin() {
        console.log("Fazer login");
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text variant="headlineMedium" style={styles.textOla}>
                    Faça login
                </Text>
                <TextInput
                    placeholder="Digite seu email"
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    placeholder="Digite sua senha"
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry
                />
                <Button onPress={() => realizaLogin}> Fazer Login </Button>
                <Button onPress={() => navigation.navigate("RegisterScreen")}> Faça seu cadastro </Button>
            </View>
        </View>
    );
}
