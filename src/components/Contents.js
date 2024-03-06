import { View, StyleSheet, Keyboard, Alert} from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import React from 'react'

const Contents = () => {
    const {showPassword, setShowPassword} = React.useState(false);
  return (
    <View style = {styles.Content}>
      <TextInput
      placeholder='Email'
      label= 'Email'
      style = {styles.TextInput}
      />
      <TextInput
      placeholder='Password'
      label= 'Password'
      style = {styles.TextInput}
      secureTextEntry = {!showPassword}
      right = {
        <TextInput.Icon
        icon = {showPassword ? "eye" : "eye-off"}
        onPress={() =>{
            Keyboard.dismiss;
            setShowPassword(!showPassword);

        }}
        />
      }
      />
      <View>
      <Button
      icon = "login" 
      mode= "contained" 
      onPress={() => Alert.alert ("Button Login Test Succesfully")}
      style = {styles.buttonLogin}>Login</Button>
      </View>
      <View>
      <Button 
      icon="account-plus" 
      mode="contained-tonal" 
      onPress={() => Alert.alert  ("Button Login Test Succesfully")}
      style = {styles.buttonSignup}>Sign-Up</Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({

    Content : {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },

    TextInput: {
        marginTop: 5,
        width: "100%",
        maxwidth: '80%'

    },
    buttonLogin: {
        marginTop: 20,
        width: "100%",
        paddingHorizontal: 20

    },
    buttonSignup: {
        marginTop: 10,
        width: "100%",
        paddingHorizontal: 20
    }
})

export default Contents