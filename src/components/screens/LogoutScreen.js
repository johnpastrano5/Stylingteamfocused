import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';

const LogoutScreen = () =>{
    return (
      <View style={styles.screen}>
      <Text style={styles.message}>Are you sure you want to log out?</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Log Out
      </Button>
    </View>
    );
  }
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingHorizontal: 20,
    },
    message: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
    },
    button: {
      borderRadius: 8,
      width: 150,
      backgroundColor: '#FF6347',
    },
    buttonLabel: {
      fontSize: 16,
    },
  });

export default LogoutScreen
