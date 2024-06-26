import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, Modal, Portal, Surface, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaVerify, setSenhaVerify] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [erro, setErro] = useState({
        email: false,
        nome: false,
        senha: false,
        senhaVerify: false,
        logradouro: false,
        cep: false,
        cidade: false,
        estado: false,
    })

    const [visible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);


    function verificaSenha() {
        if (senha === senhaVerify) {
            console.log("Tudo certo por aqui. Nada de novo sob o sol. Fork found in the kitchen");
            return true;
        } else {
            alert("A senha deve permancer igual em ambos os campos.");
            return false;
        }
    }

    function registra() {
        if (nome === "") {
            setErro({ ...erro, nome: true });
            showModal();
            return (0);
        }
        if (email === "") {
            setErro({ ...erro, email: true });
            showModal();
            return (0);
        }
        if (senha === "") {
            setErro({ ...erro, senha: true });
            showModal();
            return (0);
        }
        if (senhaVerify === "") {
            setErro({ ...erro, senhaVerify: true });
            showModal();
            return (0);
        }
        if (logradouro === "") {
            setErro({ ...erro, logradouro: true });
            showModal();
            return (0);
        }
        if (cep === "") {
            setErro({ ...erro, cep: true });
            showModal();
            return (0);
        }
        if (cidade === "") {
            setErro({ ...erro, cidade: true });
            showModal();
            return (0);
        }
        if (estado === "") {
            setErro({ ...erro, estado: true });
            showModal();
            return (0);
        }

        if (verificaSenha()) {
            console.log("Registrado com sucesso");
            navigation.navigate("LoginScreen");
        }
        cadastrarFirebase();
    }

    async function cadastrarFirebase() {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;
            console.log("Usuário cadastrado!!!!", user);

            const collectionRef = collection(db, "usuarios");
            // inserção dos dados
            await setDoc(doc(collectionRef, user.uid), // collectionref: referencia da colecao tabela; uid:id do documento igual chave primaria
                {
                    nome: nome,
                    logradouro: logradouro,
                    cep: cep,
                    cidade: cidade,
                    estado: estado,
                });
            navigation.navigate("LoginScreen");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setErrorMessage("email ja esta cadastrado");
            } else {
                setErrorMessage(" erro ao cadastrar usuario" + error.message);
            }
            showModal();
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
                showModal();
            });
    }

    return (
        <ScrollView>
            <Surface style={styles.container}>
                <View style={styles.innerContainer}>
                    {/* Modal */}
                    <Portal>
                        <Modal
                            visible={visible}
                            onDismiss={hideModal}
                            contentContainerStyle={{ backgroundColor: "white", padding: 20 }}
                        >
                            <Text>{errorMessage}</Text>
                            <Button onPress={hideModal}>Fechar</Button>
                        </Modal>
                    </Portal>
                    {/* FIM Modal */}
                    <Text style={styles.preco}>
                        Qual o preço do medo abundante de todas as verdades?
                    </Text>
                    <Text style={styles.textReg}> Venda venda a sua alma </Text>
                    <form>
                        <TextInput
                            style={styles.input}
                            placeholder="Seu nome"
                            onChangeText={setNome}
                            value={nome}
                            error={erro.nome}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Seu email"
                            onChangeText={setEmail}
                            value={email}
                            error={erro.email}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite a sua senha"
                            onChangeText={setSenha}
                            value={senha}
                            error={erro.senha}
                            secureTextEntry
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirme sua senha"
                            onChangeText={setSenhaVerify}
                            value={senhaVerify}
                            error={erro.senhaVerify}
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
                            error={erro.cep}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Logradouro"
                            onChangeText={setLogradouro}
                            value={logradouro}
                            error={erro.logradouro}
                        />

                        <View
                            style={{ flexDirection: "row", justifyContent: "space-between" }}
                        >
                            <TextInput
                                style={{ ...styles.input, width: "70%" }}
                                placeholder="Cidade"
                                onChangeText={setCidade}
                                value={cidade}
                                error={erro.cidade}
                            />
                            <TextInput
                                style={{ ...styles.input, width: "30%" }}
                                placeholder="Estado"
                                onChangeText={setEstado}
                                value={estado}
                                error={erro.estado}
                                maxLength={2}
                            />
                        </View>

                        <Button onPress={registra} mode="outlined">
                            Registrar
                        </Button>
                        <Button onPress={() => navigation.navigate("LoginScreen")}>
                            Fazer login
                        </Button>
                    </form>
                </View>
            </Surface>
        </ScrollView>
    );
}