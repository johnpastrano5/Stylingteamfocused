import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View  } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './src/components/Header';
import Footer from './src/components/footer';
import Landing from './src/components/landing';
import Login from './src/components/login';
import Registration from './src/components/registration';
import AccountRecovery from './src/components/accountrecovery';
import Home from './src/components/home';



export default function App() {
  const Stack = createStackNavigator();
  return (
    
      <SafeAreaProvider>
        <View style={styles.container}>
      <Header/>
     
      <StatusBar style="auto" />
    </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="landing">
        <Stack.Screen name="Landingpage" component={Landing} />
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="registration" component={Registration}/>
        <Stack.Screen name="accountrecovery" component={AccountRecovery}/>
        <Stack.Screen name="home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
    <Footer/>
      </SafeAreaProvider>

    
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

   
  },
  
});
