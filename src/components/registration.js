import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Registration = ({ navigation }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showPassword2, setShowPassword2] = React.useState(false);
    return (
        <View style={styles.content}>
            <TextInput
                placeholder='Email'
                label='Email'
                style={styles.textInput}
            />
            <TextInput
                placeholder='Password'
                label='Password'
                style={styles.textInput}
                secureTextEntry={!showPassword}
                right={
                    <TextInput.Icon
                        icon={showPassword ? "eye" : "eye-off"}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }  
            />
            <TextInput
                placeholder='Confirm Password'
                label='Confirm Password'
                style={styles.textInput}
                secureTextEntry={!showPassword2}
                right={
                    <TextInput.Icon
                        icon={showPassword2 ? "eye" : "eye-off"}
                        onPress={() => setShowPassword2(!showPassword2)}
                    />
                }  
            />
            <View style={styles.buttonsContainer}>
                <Button
                    icon="arrow-left"
                    mode="outlined"
                    onPress={() => navigation.navigate('Login')}
                    style={[styles.button, styles.backButton]}
                    labelStyle={styles.buttonLabel}
                >
                    Back to Login
                </Button>
                <Button
                    icon="account-plus"
                    mode="contained"
                    onPress={() => console.log('Register pressed')}
                    style={[styles.button, styles.registerButton]}
                    labelStyle={styles.buttonLabel}
                >
                    Register
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 0.5,
        padding: 10,
        alignItems: 'center'
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
        borderColor: '#D8D7D5',
        borderWidth: 1,
        
    },
    registerButton: {
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

export default Registration
