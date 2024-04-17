import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View>
            <Text style={styles.text}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'green',
        fontWeight: 'bold',
        padding: '2px',
        justifyContent: 'center',
        alignItems: 'center',
    }
});