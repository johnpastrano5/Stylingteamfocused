import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import historyicon from '../../../assets/historyicon.png';
import biologyicon from '../../../assets/biologyicon.png';
import othericon from '../../../assets/othericon.png';

import history1 from '../../../assets/history1.webp';
import history2 from '../../../assets/history2.webp';

import biology1 from '../../../assets/biology1.webp';
import biology2 from '../../../assets/biology2.webp';

import other1 from '../../../assets/other1.webp';
import other2 from '../../../assets/other2.webp';
import other3 from '../../../assets/other3.webp';
import other4 from '../../../assets/other4.webp';

const Stack = createStackNavigator();

const HistoryScreen = ({ route }) => {
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const toggleDetails = (image, title) => {
    setShowDetails(!showDetails);
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <TouchableOpacity onPress={() => toggleDetails(history1, "History Image 1")} style={styles.imageContainer}>
          <Image source={history1} style={styles.image} />
          <Text style={styles.imageTitle}>World History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(history2, "History Image 2")} style={styles.imageContainer}>
          <Image source={history2} style={styles.image} />
          <Text style={styles.imageTitle}>American History</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={showDetails} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedImage && (
            <Image source={selectedImage} style={styles.modalImage} />
          )}
          <Text style={styles.modalText}>Norem</Text><Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tortor ut elit varius commodo sit amet ac magna. Nullam euismod euismod lorem nec hendrerit. Suspendisse potenti. Sed interdum libero eget ante ultrices condimentum. Duis et elit eu massa commodo ultrices. Donec vel odio eu risus aliquam auctor. 
          </Text>
          <Text>
            Phasellus eget libero id turpis fermentum scelerisque. Aliquam erat volutpat. Ut non ex et quam aliquam convallis.
          </Text>
          <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
      </Modal>
    </View>
  );
};

const BiologyScreen = ({ route }) => {
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const toggleDetails = (image, title) => {
    setShowDetails(!showDetails);
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <TouchableOpacity onPress={() => toggleDetails(biology1, "Biology Image 1")} style={styles.imageContainer}>
          <Image source={biology1} style={styles.image} />
          <Text style={styles.imageTitle}>Plant Biology</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(biology2, "Biology Image 2")} style={styles.imageContainer}>
          <Image source={biology2} style={styles.image} />
          <Text style={styles.imageTitle}>Zoology</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={showDetails} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedImage && (
            <Image source={selectedImage} style={styles.modalImage} />
          )}
          <Text style={styles.modalText}>Norem</Text><Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tortor ut elit varius commodo sit amet ac magna. Nullam euismod euismod lorem nec hendrerit. Suspendisse potenti. Sed interdum libero eget ante ultrices condimentum. Duis et elit eu massa commodo ultrices. Donec vel odio eu risus aliquam auctor. 
          </Text>
          <Text>
            Phasellus eget libero id turpis fermentum scelerisque. Aliquam erat volutpat. Ut non ex et quam aliquam convallis.
          </Text>
          <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
      </Modal>
    </View>
  );
};

const OtherScreen = ({ route }) => {
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const toggleDetails = (image, title) => {
    setShowDetails(!showDetails);
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <TouchableOpacity onPress={() => toggleDetails(other1, "Other Image 1")} style={styles.imageContainer}>
          <Image source={other1} style={styles.image} />
          <Text style={styles.imageTitle}>ChainsawMan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(other2, "Other Image 2")} style={styles.imageContainer}>
          <Image source={other2} style={styles.image} />
          <Text style={styles.imageTitle}>Solo Leveling</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(other3, "Other Image 3")} style={styles.imageContainer}>
          <Image source={other3} style={styles.image} />
          <Text style={styles.imageTitle}>Demonic Evolution</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(other4, "Other Image 4")} style={styles.imageContainer}>
          <Image source={other4} style={styles.image} />
          <Text style={styles.imageTitle}>Nano Machine</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={showDetails} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedImage && (
            <Image source={selectedImage} style={styles.modalImage} />
          )}
          <Text style={styles.modalText}>Norem</Text><Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tortor ut elit varius commodo sit amet ac magna. Nullam euismod euismod lorem nec hendrerit. Suspendisse potenti. Sed interdum libero eget ante ultrices condimentum. Duis et elit eu massa commodo ultrices. Donec vel odio eu risus aliquam auctor. 
          </Text>
          <Text>
            Phasellus eget libero id turpis fermentum scelerisque. Aliquam erat volutpat. Ut non ex et quam aliquam convallis.
          </Text>
          <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
      </Modal>
    </View>
  );
};

const CategoryScreen = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoryListScreen}
        options={{ headerLeft: null }}
      />
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
    borderRadius: 50,
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

export default CategoryScreen;
