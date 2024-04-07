import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import historyicon from '../../../assets/historyicon.png';
import biologyicon from '../../../assets/biologyicon.png';
import othericon from '../../../assets/othericon.png';

const Stack = createStackNavigator();

const HistoryScreen = () => (
  <View style={styles.container}>
    <Text>History Screen</Text>
  </View>
);

const BiologyScreen = () => (
  <View style={styles.container}>
    <Text>Biology Screen</Text>
  </View>
);

const OtherScreen = () => (
  <View style={styles.container}>
    <Text>Other Screen</Text>
  </View>
);


const CategoryScreen = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoryListScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Biology" component={BiologyScreen} />
      <Stack.Screen name="Other" component={OtherScreen} />
    </Stack.Navigator>
  );
};


const CategoryListScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => navigation.navigate('History')} style={styles.categoryContainer}>
        <Image source={historyicon} style={styles.categoryIcon} />
        <Text style={styles.category}>History</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Biology')} style={styles.categoryContainer}>
        <Image source={biologyicon} style={styles.categoryIcon} />
        <Text style={styles.category}>Biology</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Other')} style={styles.categoryContainer}>
        <Image source={othericon} style={styles.categoryIcon} />
        <Text style={styles.category}>Other</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  categoryContainer: {
    width: '30%',
    margin: 10,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  category: {
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryScreen
