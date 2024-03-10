import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import TFs2 from '../../assets/TFs2.png'
const Landing = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View><Image source={TFs2} styles={styles.logoheader}/></View>

           <Text style={styles.title}>Let Get's Started </Text>
            <View style={styles.buttonsContainer}>
                <Button
                    icon="login"
                    mode="contained"
                    onPress={() => navigation.navigate('login')}
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
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10
       
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonsContainer: {
        width: '100%',
    },
    button: {
        marginTop: 5,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#D8D7D5',
    },
    
    signupButton: {
        marginTop: 10,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#B6E5D8',
    },
    buttonLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default Landing