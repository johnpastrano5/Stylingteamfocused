import { View, Text,  Image, StyleSheet } from 'react-native'
import React from 'react'
import TF from '../../assets/TF.webp'

const Header = () => {
  return (
    <View style= {styles.header}>
        <Image source={TF} style={styles.logoheader}/>
      <Text style = {styles.HeaderTitle}>{props.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 150,
        paddingTop: 36,
        backgroundColor: '#08313A',
        alignItems: 'flex-start',
        

    },
    HeaderTitle: {
      color:'white',
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontsize: '64'
    },
    logoheader: {
      width: 80,
      height: 80
    }
  });

export default Header