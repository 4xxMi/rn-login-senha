import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { db } from "../config/firebase";
import { List, Text } from "react-native-paper";

export default function ListNotes() {
  const [tarefas, setTarefas] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tarefas"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTarefas(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
      console.log("Tarefas", tarefas);
    };

    fetchData();

    // Cleanup
    return () => {
      // Cleanup code if needed
    };
  }, []);

  const renderItem = ({ item }) => (
    <List.Section>
      <List.Subheader></List.Subheader>
      <List.Item
        title={item.descricao}
        left={() => <List.Icon icon="check" />}
      />
    </List.Section>
  );

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={tarefas}
        renderItem={renderItem}
        style={{ flex: 1, width: "100%" }}
        // keyExtractor={() => {}}
      />
    </View>
  );
}
