import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const FilterScreen = ({ navigation }) =>  {
  
  const navigateToCategory = (categoryName) => {
    
    navigation.navigate(categoryName);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Filters</Text>

      <TouchableOpacity style={styles.filterButton} onPress={() => navigateToCategory('History')}>
        <Text style={styles.filterButtonText}>History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.filterButton} onPress={() => navigateToCategory('Biology')}>
        <Text style={styles.filterButtonText}>Biology</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.filterButton} onPress={() => navigateToCategory('Others')}>
        <Text style={styles.filterButtonText}>Others</Text>
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
  filterButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  filterButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FilterScreen
