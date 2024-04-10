import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import maps from  '../../../assets/maps.png';


const ContactScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Contact Us</Text>

        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={maps}
              style={styles.locationImage}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Information:</Text>
            <Text>Email: example@example.com</Text>
            <Text>Phone: +1234567890</Text>
            <Text>Address: 123 Street, City, Country</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    alignItems: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  imageContainer: {
    marginBottom: 20,
  },
  locationImage: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default ContactScreen
