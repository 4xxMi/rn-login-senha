import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, Modal, Portal, Surface, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles";
import { db } from "../config/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

export default function RegisterScreen({ navigation }) {
    const [artista, setArtista] = useState("");
    const [nome, setNome] = useState("");
    const [album, setAlbum] = useState("");
    const [erro, setErro] = useState({
        artista: false,
        nome: false,
        album: false,
    })

    const [visible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    function registra() {
        if (nome === "") {
            setErro({ ...erro, nome: true });
            showModal();
            return (0);
        }
        if (artista === "") {
            setErro({ ...erro, artista: true });
            showModal();
            return (0);
        }
        if (album === "") {
            setErro({ ...erro, album: true });
            showModal();
            return (0);
        }
        cadastrarFirebase();
    }

    async function cadastrarFirebase() {
        try {
            const collectionRef = collection(db, "musics");
            // inserção dos dados
            await setDoc(doc(collectionRef), // collectionref: referencia da colecao tabela; 
                {
                    nome: nome,
                    artista: artista,
                    album: album,
                });
            if (artista === "artic monkeys") {
                alert("aqui não");
                return (0);
            } else {
                console.log("ok");
            }
        } catch (error) {
            setErrorMessage("Algo deu errado aí mano não sei sinceramente" + error.message);
            console.log("Deu ruim aq" + error.message);
            showModal();
        }
        alert("Valeuzão!");
        console.log("Tudo certo dorme tranquilo");
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
                        Me recomenda uma música aí?
                    </Text>
                    <form>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome da música"
                            onChangeText={setNome}
                            value={nome}
                            error={erro.nome}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Artista"
                            onChangeText={setArtista}
                            value={artista}
                            error={erro.artista}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Album por favor amg só pa completa"
                            onChangeText={setAlbum}
                            value={album}
                            error={erro.album}
                        />
                        <Button onPress={registra} mode="outlined">
                            Recomendar
                        </Button>
                        <Button onPress={() => navigation.navigate("HomeScreen")}>
                            Não sei se quero mano. Volta pro home aí
                        </Button>
                    </form>
                </View>
            </Surface>
        </ScrollView>
    );
}