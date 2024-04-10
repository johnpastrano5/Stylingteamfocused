import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Us</Text>

      <View style={styles.content}>
        <View style={styles.section}>
        <Text style={styles.sectionTitle}>Founder:</Text>
            <Text>John Leo F. Pastrano</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Co-founder:</Text>
            <Text>Beverly Jane L. Javier</Text>
            <Text>Josephaul Pasco</Text>
          <Text style={styles.sectionTitle}>Our System</Text>
          
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tortor ut elit varius commodo sit amet ac magna. Nullam euismod euismod lorem nec hendrerit. Suspendisse potenti. Sed interdum libero eget ante ultrices condimentum. Duis et elit eu massa commodo ultrices. Donec vel odio eu risus aliquam auctor. 
          </Text>
          <Text>
            Phasellus eget libero id turpis fermentum scelerisque. Aliquam erat volutpat. Ut non ex et quam aliquam convallis.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    fontSize: 18,
  },
});

export default AboutUsScreen
