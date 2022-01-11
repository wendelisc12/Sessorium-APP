import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './src/screens/login';
import loginAdministrador from './src/screens/loginAdministrador';
import registrarEscola from './src/screens/registrarEscola';
import cadastrarCoordenador from './src/screens/cadastrarCoordenador';
import cadastrarProfessor from './src/screens/cadastrarProfessor';
import inicioAluno from './src/pages-aluno/inicial'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicioAluno">
        <Stack.Screen name="login" component={login} options={{headerShown: false}}/>
        <Stack.Screen name="loginAdministrador" component={loginAdministrador} options={{headerShown: false}} />
        <Stack.Screen name="registrarEscola" component={registrarEscola} options={{headerShown: false}} />
        <Stack.Screen name="cadastrarCoordenador" component={cadastrarCoordenador} options={{headerShown: false}} />
        <Stack.Screen name="cadastrarProfessor" component={cadastrarProfessor} options={{headerShown: false}} />
        <Stack.Screen name="inicioAluno" component={inicioAluno} options={{headerShown: false}} />


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
