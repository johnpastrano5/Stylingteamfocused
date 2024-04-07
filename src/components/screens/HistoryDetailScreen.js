
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the History Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HistoryDetailScreen
