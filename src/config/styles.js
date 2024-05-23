import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    preco: {
        color: 'crimson',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 12,
        fontStyle: 'italic',
        margin: 10,
    },
    textReg: {
        color: 'dark red',
        fontStyle: 'italic',
        fontSize: 10,
        flex: 1,
        alignSelf: 'center',
        marginBottom: 10,
    },
    textOla: {
        color: 'green',
        fontWeight: 'bold',
        padding: '2px',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        marginBottom: 20,
    },
    txtDivisor: {
        color: '#510606',
        textAlign: 'center',
        fontSize: 25,
        margin: '10px',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    innerContainer: {
        paddingHorizontal: 20,
        alignSelf: "stretch",
    },
    input: {
        marginBottom: 10,
    },
    modal: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        color: 'black',
    },
});