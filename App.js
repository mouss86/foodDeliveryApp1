import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import HomeScreen from './Screens/HomeScreen'
import DetailScreen from './Screens/DetailScreen'
import ThirdScreen from './Screens/ThirdScreen'
/* function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
} */

const Stack = createNativeStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
            name= "HomeScreen"
            component={HomeScreen} />
              <Stack.Screen
            name= "DetailScreen"
            component={DetailScreen} />
            <Stack.Screen
            name="ThirdScreen"
            component= {ThirdScreen} />           
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



    



















/*

return(
        <Stack.Navigator>
            <Stack.Screen
            name= "HomeScreen"
            component={HomeScreen} />
              <Stack.Screen
            name= "DetailScreen"
            component={DetailScreen} />
        </Stack.Navigator>
    );
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
