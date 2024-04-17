import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles";

//nome,email,senjha,senha2
//end: lograsouro, cep, cidade, estado

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaVerify, setSenhaVerify] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    function registra(){
        console.log("Registrado com sucesso");
    }

    return (
        <View>
            <Text style={styles.preco}> Qual o preço do medo abundante de todas as verdades? </Text>
            <Text style={styles.textReg}> Venda venda a sua alma </Text>

            <TextInput style={styles.container}
                placeholder="Seu nome"
                onChangeText={setNome}
                value={nome}
            />
            <TextInput style={styles.container}
                placeholder="Seu email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput style={styles.container}
                placeholder="Digite a sua senha"
                onChangeText={setSenha}
                value={senha}
                secureTextEntry
            />
            <TextInput style={styles.container}
                placeholder="Confirme sua senha"
                onChangeText={setSenhaVerify}
                value={senhaVerify}
                secureTextEntry
            />
            <Text style={styles.txtDivisor}> Dados pessoais: </Text>
            <TextInput style={styles.container}
                placeholder="Logradouro"
                onChangeText={setLogradouro}
                value={logradouro}
            />
            <TextInput style={styles.container}
                placeholder="Cidade"
                onChangeText={setCidade}
                value={cidade}
            />
            <TextInput style={styles.container}
                placeholder="Estado"
                onChangeText={setEstado}
                value={estado}
            />
            <TextInput style={styles.container}
                placeholder="CEP"
                onChangeText={setCep}
                value={cep}
            />
            <Button onPress={() => registra}> Registrar </Button>
            <Button onPress={() => navigation.navigate("HomeScreen")}> Cometi um erro. Quero voltar. Por favor me perdoa... </Button>
        </View>
    )
}
