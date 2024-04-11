import { StyleSheet, View, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Text } from 'react-native-paper';

export default function LoginScreen() {
    return (
        <View>
            <Text style={styles.text}>
                Faça login 
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'green',
        fontWeight: 'bold',
        padding: '2px',
        justifyContent: 'center',
        alignItems: 'center',
    }
});