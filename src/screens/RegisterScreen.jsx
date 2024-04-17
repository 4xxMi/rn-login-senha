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

            <TextInput
                placeholder="Seu nome e sobrenome"
                onChangeText={setNome}
                value={nome}
            />
            <TextInput
                placeholder="Seu email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                placeholder="Digite a sua senha"
                onChangeText={setSenha}
                value={senha}
                secureTextEntry
            />
            <TextInput
                placeholder="Confirme sua senha"
                onChangeText={setSenhaVerify}
                value={senhaVerify}
                secureTextEntry
            />
            <TextInput
                placeholder="Sua idade"
                onChangeText={setLogradouro}
                value={logradouro}
            />
            <TextInput
                placeholder="Nome do cachorro"
                onChangeText={setCidade}
                value={cidade}
            />
            <TextInput
                placeholder="Seu maior segredo"
                onChangeText={setEstado}
                value={estado}
            />
            <TextInput
                placeholder="Numeros e validade atrás do cartão"
                onChangeText={setCep}
                value={cep}
            />
            <Button onPress={() => registra}> Vender </Button>
            <Button onPress={() => navigation.navigate("HomeScreen")}> Cometi um erro. Quero voltar. Por favor me perdoa... </Button>
        </View>
    )
}
