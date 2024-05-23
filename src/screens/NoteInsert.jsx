import { Surface } from "react-native-paper";
import { View } from "react-native";
import { styles } from "../config/styles";
import InsertNote from "../components/InsertNote";
import ListNotes from "../components/ListNotes";
import { ScrollView } from "react-native";

export default function NoteInsert() {
  return (
    <ScrollView>
    <Surface
      style={{
        ...styles.containerFull,
      }}
    >
      <View style={{ ...styles.innerContainer, width: "100%" }}>
        <View style={{ width: "100%" }}>
          <InsertNote style={{ width: "100%" }} />
        </View>
        <View style={{ flex: 1, width: "100%" }}>
          <ListNotes />
        </View>
      </View>
    </Surface></ScrollView>
  );
}
