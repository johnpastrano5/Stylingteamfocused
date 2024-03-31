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
import Feed from './src/components/home';

const Stack = createStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header />
      </View>
      <NavigationContainer>
        <Stack.Navigator>
          {loggedIn ? (
            <Stack.Screen name="Home" component={Feed} options={{ headerShown: false }} />
          ) : (
            <>
              <Stack.Screen name="Landingpage" component={Landing} options={{ headerShown: false }} />
              <Stack.Screen name="login">
                {(props) => <Login {...props} onLogin={handleLogin} />}
              </Stack.Screen>
              <Stack.Screen name="registration" component={Registration} options={{ headerShown: false }} />
              <Stack.Screen name="accountrecovery" component={AccountRecovery} options={{ headerShown: false }} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
