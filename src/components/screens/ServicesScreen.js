import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ServicesScreen = () =>  {
 
  const handleBorrow = () => {
    
    console.log("Borrowing a book...");
  };

  const handleReserve = () => {
    
    console.log("Reserving a book...");
  };


  const handleDonate = () => {
    
    console.log("Donating a book...");
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Services Screen</Text>

      <TouchableOpacity style={styles.button} onPress={handleBorrow}>
        <Text style={styles.buttonText}>Borrow a Book</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleReserve}>
        <Text style={styles.buttonText}>Reserve a Book</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleDonate}>
        <Text style={styles.buttonText}>Donate a Book</Text>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ServicesScreen 
