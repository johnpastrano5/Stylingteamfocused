
import { StyleSheet, Text, View, Button} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function DetailsScreen() {
  return (
    <View style={{ flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}
function Homepage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}

      />
    </View>
  );
}

function CategoryScreen({ navigation }) {
  return (
    <View style={{ flex: 1,
     justifyContent: 'center', 
     alignItems: 'center' }}>
      <Text>Products</Text>
      <Button
        title="Go To Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function FavScreen({ navigation }) {
  return (
    <View style={{ flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' }}>
      <Text>Fav screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Homepage} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const CategoryStack = createNativeStackNavigator();

function CategoryStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen name="Category" component={CategoryScreen} />
      <CategoryStack.Screen name="Details" component={DetailsScreen} />
    </CategoryStack.Navigator>
  );
}
const FavStack = createNativeStackNavigator();

function FavStackScreen() {
  return (
    <FavStack.Navigator>
      <FavStack.Screen name="Fav" component={FavScreen} />
      <FavStack.Screen name="Details" component={DetailsScreen} />
    </FavStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs () {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        
    <Tab.Screen name="Home" component={HomeStackScreen} 
    options={{
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" 
        color={color} size={26} />
      ),
    }}/>
    <Tab.Screen name="Category" component={CategoryStackScreen}
    options={{
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="apps"
         color={color} size={26} />
      ),
    }} />
    <Tab.Screen name="Fav" component={FavStackScreen}
    options={{
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="pentagram" 
        color={color} size={26} />
      ),
    }} />
  </Tab.Navigator>
  )};


export default data

const styles = StyleSheet.create({})