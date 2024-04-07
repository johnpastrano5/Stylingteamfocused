import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Login = ({ navigation }) => {
    
    const [showPassword, setShowPassword] = useState(false); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const handleLogin = () => {
        
        navigation.navigate('Home');
    };

    return (
        <View style={styles.content}>
            <TextInput
                placeholder='Email'
                label='Email'
                style={styles.textInput}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                placeholder='Password'
                label='Password'
                style={styles.textInput}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={text => setPassword(text)}
                right={
                    <TextInput.Icon
                        name={showPassword ? 'eye-off' : 'eye'}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <View style={styles.buttonsContainer}>
                <Button
                    icon="login"
                    mode="contained"
                    onPress={handleLogin} 
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                >
                    Login
                </Button>
                <Button
                    icon="account-plus"
                    mode="contained"
                    onPress={() => navigation.navigate('Registration')}
                    style={styles.signupButton}
                    labelStyle={styles.buttonLabel}
                >
                    Sign-up
                </Button>
                <TouchableOpacity onPress={() => navigation.navigate('AccountRecovery')}>
                    <Text style={styles.forgotPasswordLabel}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 0.8,
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
        textAlign: 'center',
    },
});

export default Login
