import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const AccountRecovery = ({ navigation }) => {
   
    return (
        <View style={styles.content}>
            <TextInput
                placeholder='Email'
                label='Email'
                style={styles.textInput}
            />
            <View style={styles.buttonsContainer}>
                <Button
                    icon="arrow-left"
                    mode="outlined"
                    onPress={() => navigation.navigate('login')}
                    style={[styles.button, styles.backButton]}
                    labelStyle={styles.buttonLabel}
                >
                    Back to Login
                </Button>
                <Button
                    icon="account-check-outline"
                    mode="contained"
                    onPress={() => console.log('Recover Account pressed')}
                    style={[styles.button, styles.recoverButton]}
                    labelStyle={styles.buttonLabel}
                >
                    Recover Account
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        marginTop: 5,
        width: "60%",
        maxWidth: '80%'
    },
    buttonsContainer: {
        width: '60%',
        marginTop: 20,
    },
    button: {
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: 10,
    },
    backButton: {
        borderColor: '#007bff',
        borderWidth: 1,
        
    },
    recoverButton: {
        marginTop: 10,
        paddingVertical: 8,
        borderRadius: 50,
        backgroundColor: '#B6E5D8'
    },
    buttonLabel: {
        fontSize: 14,
        fontWeight: 'bold',
    }
});

export default AccountRecovery