import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './src/screens/login';
import loginAdministrador from './src/screens/loginAdministrador';
import registrarescola from './src/screens/registrarescola';
import cadastrarcoordenador from './src/screens/cadastrarcoordenador';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="login">
=======
      <Stack.Navigator initialRouteName="cadastrarcoordenador">
>>>>>>> f263c8e20d7a867ab21173a3e98ab1569eb078cd
        <Stack.Screen name="login" component={login} options={{headerShown: false}} />
        <Stack.Screen name="loginAdministrador" component={loginAdministrador} options={{ title:""}} />
        <Stack.Screen name="registrarescola" component={registrarescola} options={{ title:""}} />
        <Stack.Screen name="cadastrarcoordenador" component={cadastrarcoordenador} options={{ title:""}} />

        

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
