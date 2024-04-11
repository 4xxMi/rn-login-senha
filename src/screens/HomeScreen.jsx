import { Text, View, StyleSheet } from 'react-native';

export default function HomeScreen() {

    return (
        <View>
            <Text style={styles.text}>
                the magnus archives is a podcast distributed by rusty quill and licensed under a creative commons atributtion non commercial share alike 4.0 international license. todays episode was written by jhonathan sims and brought to you by alexander j newall
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'green',
        fontWeight: 'bold',
        padding:'2px',
        justifyContent:'center',
        alignItems:'center',
    }
});