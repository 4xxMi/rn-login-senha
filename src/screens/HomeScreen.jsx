import {  View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function HomeScreen({navigation}) {

    return (
        <View>
            <Text style={styles.text}> Seja bem vinde !!!!!!!</Text>
            <Button onPress={() => { 
                navigation.navigate("LoginScreen")}}> 
                Login !!!!!
                </Button>
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