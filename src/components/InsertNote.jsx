import { addDoc } from 'firebase/firestore';
import { useState } from "react";
import { Modal, Portal, TextInput } from "react-native-paper";
import { Icon } from "react-native-paper";
import { styles } from "../config/styles";
import { Alert } from "react-native";
import { collection } from "firebase/firestore";
import { db } from '../config/firebase';

export default function InsertNote() {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState({
    visible: false,
    message: "area de exemplo clique fora para bababa",
  });

  const showModal = (message) => setVisible({ message: message, visible: true });
  const hideModal = () => setVisible({ ...visible, visible: false });

  async function handleSubmit() {
    if (text.length <= 1) {
      showModal("A nota deve ter mais de um caracter");
      return;
    }
    try {
      const colRef = collection(db, "tarefas");
      const payload = {
        descricao: text,
        data: new Date(),
      };
      const docRef = await addDoc(colRef, payload);
      console.log("Document written with ID: ", docRef.id);
      if (text !== "") {
        setText("");
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>

      <Portal>
        <Modal visible={visible.visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
          <Text>{visible.message}</Text>
        </Modal>
      </Portal>

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Inserir nota"
        right={<TextInput.Icon onPress={handleSubmit} icon="send" />}
        style={styles.input}
      />
    </>
  );
}
