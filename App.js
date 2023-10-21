import { StatusBar } from 'expo-status-bar';
import React from "react";
import {View, Text, Flatlist,TouchableOpacity} from "react-native";
import {createStackNavigator} from '@react-navigation/native-stack';


const Stack = createStackNavigator();

export default function App()


  {
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
};


















/*
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
