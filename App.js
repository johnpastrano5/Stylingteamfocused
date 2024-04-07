import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

import Header from './src/components/Header';
import Landing from './src/components/landing';
import Login from './src/components/login';
import Registration from './src/components/registration';
import AccountRecovery from './src/components/accountrecovery';
import Home from './src/components/home';

const Stack = createStackNavigator();

export default function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  const handleAuthentication = () => {
    setIsAuthenticated(true); 
  };

  return (
    <SafeAreaProvider>
      <View>
        <Header/>
      </View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
          <Stack.Screen name="Login">
            {props => <Login {...props} onAuthenticate={handleAuthentication} options={{ headerShown: false }} />}
          </Stack.Screen>
          <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
          <Stack.Screen name="AccountRecovery" component={AccountRecovery} options={{ headerShown: false }} />
          <Stack.Screen 
            name="Home"
            component={Home}
            initialParams={{ isAuthenticated: isAuthenticated }}
            options={{ 
              headerShown: false, 
              headerLeft: null 
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
