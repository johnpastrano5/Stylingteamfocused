import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

const ServicesScreen = () => {

  const handleBorrow = () => {
    // Implement borrowing logic here
    Alert.alert('Borrowing', 'You borrowed a book!');
  };

  const handleReserve = () => {
    // Implement reserving logic here
    Alert.alert('Reserving', 'You reserved a book!');
  };

  const handleDonate = () => {
    // Implement donating logic here
    Alert.alert('Donating', 'You donated a book!');
  };

  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ServicesScreen
