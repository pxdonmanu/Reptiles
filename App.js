import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Buttons from './components/Buttons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cocodrilos from './scenes/cocodrilos/cocodrilos';
import Quelonios from './scenes/quelonios/quelonios';
import Rinocefalos from './scenes/rinocefalos/rinocefalos';
import Squamatas from './scenes/squamatas/squamatas';

export function HomeScreen() {
  return (
    <View style={styles.container}>    
      <Header name={'Reptiles'}/> 
      <Buttons /> 
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cocodrilos" component={Cocodrilos}/>
        <Stack.Screen name="Quelonios" component={Quelonios}/>
        <Stack.Screen name="Squamatas" component={Squamatas}/>
        <Stack.Screen name="Rinocefalos" component={Rinocefalos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
