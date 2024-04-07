import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import history from  '../../../assets/history.png';
import other from  '../../../assets/other.png';
import biology from  '../../../assets/biology.png';

const HomeScreen = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Our Book Collection</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigateToScreen('HistoryScreen')} style={styles.imageWrapper}>
          <Image
            source={history}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.categoryText}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('BiologyScreen')} style={styles.imageWrapper}>
          <Image
            source={biology}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.categoryText}>Biology</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('OtherScreen')} style={styles.imageWrapper}>
          <Image
            source={other}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.categoryText}>Other</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  imageWrapper: {
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  categoryText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default HomeScreen
