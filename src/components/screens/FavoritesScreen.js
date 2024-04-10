import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import history from  '../../../assets/history.png';
import other from  '../../../assets/other.png';
import biology from  '../../../assets/biology.png';
import focus from '../../../assets/focus.png';
const FavoritesScreen = () => {
  
  const favoriteItems = [
    { id: '1', name: 'Favorite Book 1', image:history},
    { id: '2', name: 'Favorite Book 2', image:biology },
    { id: '3', name: 'Favorite Book 3', image:other },
    { id: '4', name: 'Favorite Book 4', image:focus },
    
  ];

  
  const renderFavoriteItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        data={favoriteItems}
        renderItem={renderFavoriteItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FavoritesScreen;
