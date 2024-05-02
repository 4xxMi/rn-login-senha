import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, Surface, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles";

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaVerify, setSenhaVerify] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [erro, setErro] = useState("");
    
    function verificaSenha() {
        if (senha === senhaVerify) {
            console.log("Tudo certo por aqui. Nada de novo sob o sol. Fork found in the kitchen");
            return true;
        } else {
            alert("A senha deve permancer igual em ambos os campos.");
            return false;
        }
    }

    function verificaCampo() {
        if ( !email || !nome || !senha || !senhaVerify || !logradouro || !cep || !cidade || !estado  ) {
          setErro('Por favor, preencha todos os campos.');
        } else {
          setErro('tudo certo');
        }
      }

    function registra(input) {
        // try {
        //     console.log();
        // }
        // catch (erro) {
        //     console.error(erro);
        //     setErro("Why are you blue???");
        // }
        if (verificaCampo()) {
        }
        if (verificaSenha()) {
            console.log("Registrado com sucesso");
        }
    }

    function buscaCEP() {
        console.log("Busca cep");
        let cepLimpo = cep.replace("-", "").trim();
        if (cepLimpo.length < 8) return;
        fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
            .then((res) => res.json())
            .then((dados) => {
                //tratar os dados
                console.log(dados);
                setLogradouro(dados.logradouro);
                setCidade(dados.cidade);
                setEstado(dados.estado);
            })
            .catch((erro) => {
                console.error(erro);
                setErro("CEP não existe");
            });
    }

    return (
        <ScrollView>
            <Surface style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.preco}>
                        Qual o preço do medo abundante de todas as verdades?
                    </Text>
                    <Text style={styles.textReg}> Venda venda a sua alma </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Seu nome"
                        onChangeText={setNome}
                        value={nome}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Seu email"
                        onChangeText={setEmail}
                        value={email}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a sua senha"
                        onChangeText={setSenha}
                        value={senha}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirme sua senha"
                        onChangeText={setSenhaVerify}
                        value={senhaVerify}
                        secureTextEntry
                    />
                    <Text variant="headlineSmall" style={styles.txtDivisor}>
                        Dados pessoais:
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="CEP (apenas numeros)"
                        onChangeText={setCep}
                        value={cep}
                        onBlur={buscaCEP}
                        maxLength={8}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Logradouro"
                        onChangeText={setLogradouro}
                        value={logradouro}
                    />

                    <View
                        style={{ flexDirection: "row", justifyContent: "space-between" }}
                    >
                        <TextInput
                            style={{ ...styles.input, width: "70%" }}
                            placeholder="Cidade"
                            onChangeText={setCidade}
                            value={cidade}
                        />
                        <TextInput
                            style={{ ...styles.input, width: "30%" }}
                            placeholder="Estado"
                            onChangeText={setEstado}
                            value={estado}
                            maxLength={2}
                        />
                    </View>

                    <Button onPress={registra} mode="outlined">
                        Registrar
                    </Button>
                    <Button onPress={() => navigation.navigate("LoginScreen")}>
                        Cometi um erro. Quero voltar. Por favor me perdoa...
                    </Button>
                </View>
            </Surface>
        </ScrollView>
    );
}
