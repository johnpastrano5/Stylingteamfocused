import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Login = ({ navigation }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <View style={styles.content}>
            <TextInput
                placeholder='Email'
                label= 'Email'
                style={styles.textInput}
            />
            <TextInput
                placeholder='Password'
                label= 'Password'
                style={styles.textInput}
                secureTextEntry={!showPassword}
                right={
                    <TextInput.Icon
                        icon={showPassword ? "eye" : "eye-off"}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <View style={styles.buttonsContainer}>
                <Button
                    icon="login"
                    mode="contained"
                    onPress={() => navigation.navigate('home')}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                >
                    Login
                </Button>
                <Button
                    icon="account-plus"
                    mode="contained"
                    onPress={() => navigation.navigate('registration')}
                    style={styles.signupButton}
                    labelStyle={styles.buttonLabel}
                >
                    Sign-up
                </Button>
                <Button
                    onPress={() => navigation.navigate('accountrecovery')}
                    labelStyle={styles.forgotPasswordLabel}
                >
                    Forgot Password?
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
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
        paddingVertical: 8,
        borderRadius: 50,
        backgroundColor: '#D8D7D5',
        marginBottom: 8,
    },
    signupButton: {
        marginTop: 10,
        paddingVertical: 8,
        borderRadius: 50,
        backgroundColor: '#B6E5D8',
    },
    buttonLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
    forgotPasswordLabel: {
        fontSize: 14,
        color: '#007bff',
    },
});

export default Login