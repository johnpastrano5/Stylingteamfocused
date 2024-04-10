import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const FilterScreen = () => {
  const [filterMode, setFilterMode] = useState('dark');

  const applyFilter = () => {
    console.log('Applying filter:', filterMode);
    // Add your logic to apply the filter here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Filter Books</Text>

      <TouchableOpacity
        style={[styles.filterButton, filterMode === 'dark' && styles.darkMode]}
        onPress={() => setFilterMode('dark')}>
        <Text style={styles.filterButtonText}>Dark Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.filterButton, filterMode === 'light' && styles.lightMode]}
        onPress={() => setFilterMode('light')}>
        <Text style={styles.filterButtonText}>Light Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyButton} onPress={applyFilter}>
        <Text style={styles.applyButtonText}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  filterButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  darkMode: {
    backgroundColor: '#333',
    color: '#fff',
  },
  lightMode: {
    backgroundColor: '#fff',
  },
  applyButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FilterScreen
