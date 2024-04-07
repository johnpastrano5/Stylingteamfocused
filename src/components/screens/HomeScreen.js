import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import history from  '../../../assets/history.png';
import other from  '../../../assets/other.png';
import biology from  '../../../assets/biology.png';

const HomeScreen = ({ navigation }) => {
 
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigateToScreen('Screen1')}>
          <Image
            source={history}
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Screen2')}>
          <Image
            source={biology}
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Screen3')}>
          <Image
            source={other}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    margin: 10, 
  },
});

export default HomeScreen
