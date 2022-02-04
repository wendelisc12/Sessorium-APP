import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from 'react-native-elements/dist/helpers';

const Stack = createNativeStackNavigator();

export default function Painel({ navigation }) {


  return (

    <View style={styles.container}>
      <Image
        style={{ width: 160, height: 40, marginVertical: 20,
          display: 'flex',
          alignItems: 'center' }}
        source={require('../images/logo.png')}
      />

      <View style={styles.turmasContainer}>
        <View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>Bem vindo administrador</Text>
            <View style={{ width: "100%", backgroundColor: '#C9C9C9', height: 1, marginTop: 10 }}></View>
          </View>
          <View>
            <TouchableOpacity style={styles.adicionarBotao} onPress={() => { navigation.navigate('professores') }}>
              <Text style={{ color: 'white', fontSize: 28, textAlign: 'center', fontWeight: '600' }}>Professores</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.adicionarBotao} onPress={() => { navigation.navigate('alunos') }}>
            <Text style={{ color: 'white', fontSize: 28, textAlign: 'center', fontWeight: '600' }}>Alunos</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFEF",
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    height: '100%',
  },



  turmasContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flex: 1,
    margin: 10,
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  titulo: {
    height: 150,
    display: 'flex',
    alignItems: 'center'
  },



  label: {
    marginTop: 10,
    marginBottom: 5
  },


  botaoEntrarTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  adicionarBotao: {
    backgroundColor: '#32E535',
    marginVertical: 5,
    height: 150,
    width: '100%',
    borderRadius: 5,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
  },


});
