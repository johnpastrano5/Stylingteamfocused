import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import history1 from '../../../assets/history1.webp';
import history2 from '../../../assets/history2.webp';

const HistoryScreen = () => {
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleDetails = (image) => {
    setShowDetails(!showDetails);
    setSelectedImage(image);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <TouchableOpacity onPress={() => toggleDetails(history1)} style={styles.imageContainer}>
          <Image source={history1} style={styles.image} />
          <Text style={styles.imageTitle}>History Image 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(history2)} style={styles.imageContainer}>
          <Image source={history2} style={styles.image} />
          <Text style={styles.imageTitle}>History Image 2</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={showDetails} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedImage && (
            <Image source={selectedImage} style={styles.modalImage} />
          )}
          <Text style={styles.modalText}>Norem</Text>
          <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageTitle: {
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HistoryScreen
