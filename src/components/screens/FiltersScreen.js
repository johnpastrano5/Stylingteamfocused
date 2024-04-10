import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const FilterScreen = ({ navigation }) => {
  const [filterMode, setFilterMode] = useState('dark');

  const navigateToCategory = (categoryName) => {
    navigation.navigate(categoryName);
  };

  const applyFilter = () => {
    console.log('Applying filter:', filterMode);
    // Add your logic to apply the filter here
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Filters</Text>

      <TouchableOpacity
        style={[styles.filterButton, filterMode === 'dark' && styles.darkMode]}
        onPress={() => setFilterMode('dark')}>
        <Text style={styles.filterButtonText}>Dark</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.filterButton, filterMode === 'white' && styles.whiteMode]}
        onPress={() => setFilterMode('white')}>
        <Text style={styles.filterButtonText}>White</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.filterButton, filterMode === 'gray' && styles.grayMode]}
        onPress={() => setFilterMode('gray')}>
        <Text style={styles.filterButtonText}>Gray</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyButton} onPress={applyFilter}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  filterButton: {
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
  },
  whiteMode: {
    backgroundColor: '#fff',
  },
  grayMode: {
    backgroundColor: '#ccc',
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
