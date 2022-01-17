import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import AtividadesPendentes from '../componentes/atividadesPendentes';
import Turmas from '../componentes/turmas';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from 'react-native-elements/dist/helpers';

const Stack = createNativeStackNavigator();

export default function Painel({navigation}) {

   
    return (

        <View style={styles.container}>
            <Text style={styles.titulo}>Sessorium</Text>

            <View style={styles.turmasContainer}>
              <View>
                <View style={{paddingVertical: 10}}>
                  <Text style={{fontSize: 20, fontWeight: 700}}>Bem vindo administrador</Text>
                  <View style={{width: "100%", backgroundColor: '#C9C9C9', height: 1, marginTop: 10}}></View>
                </View>
                  <Text style={{marginBottom: 10}}>Adicione os funcionários da sua instituição</Text>
                  <View>
                    <TouchableOpacity style={styles.adicionarBotao} onPress={navigation.navigate('cadastrarProfessor')}>
                      <Text style={{color: 'white', fontSize: 18, fontWeight: 600}}>Adicionar professor</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.adicionarBotao} onPress={navigation.navigate('cadastrarCoordenador') }>
                      <Text style={{color: 'white', fontSize: 18, fontWeight: 600}}>Adicionar coordenador</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{width: "100%", backgroundColor: '#C9C9C9', height: 1, marginTop: 10}}></View>
                  <Text style={{marginVertical: 10}}>Adicione as turmas da sua instituição</Text>
                  <TouchableOpacity style={styles.adicionarBotao}>
                      <Text style={{color: 'white', fontSize: 18, fontWeight: 600}}>Criar turma</Text>
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
        display:'flex',
        
    },

   

    turmasContainer:{
        backgroundColor: 'white',
        width:'100%',
        flex: 1,
        margin:10,
        padding:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },

    titulo:{
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

    adicionarBotao:{
        backgroundColor: '#32E535',
        marginVertical: 5,
        height: 50,
        width: '100%',
        borderRadius: 5,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
    },


});
