import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './src/screens/login';
import loginAdministrador from './src/screens/loginAdministrador';
import registrarescola from './src/screens/registrarescola';
import cadastrarcoordenador from './src/screens/cadastrarCoordenador';
import cadastrarprofessor from './src/screens/cadastrarProfessor';
import telaAluno from './src/screens/telaAluno';
import turmas from './src/screens/turmas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="telaAluno">
        <Stack.Screen name="login" component={login} options={{headerShown: false}}/>
        <Stack.Screen name="loginAdministrador" component={loginAdministrador} options={{ title:""}, {headerShown: false}} />
        <Stack.Screen name="registrarescola" component={registrarescola} options={{ title:""}, {headerShown: false}} />
        <Stack.Screen name="cadastrarcoordenador" component={cadastrarcoordenador} options={{ title:""}, {headerShown: false}} />
        <Stack.Screen name="cadastrarprofessor" component={cadastrarprofessor} options={{ title:""}, {headerShown: false}} />
        <Stack.Screen name="telaAluno" component={telaAluno} options={{ title:""}, {headerShown: false}} />
        <Stack.Screen name="turmas" component={turmas} options={{ title:""}, {headerShown: false}} />


      </Stack.Navigator>
    </NavigationContainer>
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
