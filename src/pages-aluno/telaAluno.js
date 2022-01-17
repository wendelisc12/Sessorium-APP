import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import AtividadesPendentes from '../componentes/atividadesPendentes';
import Turmas from '../componentes/turmas';
import Routes from '../screens/TelaAlunoRotas';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function telaAluno({navigation}) {

   
    return (

        <View style={styles.container}>
            
           
            <Text style={styles.titulo}>Sessorium</Text>
           
            
          

            <View style={styles.turmasContainer}>
                <TouchableOpacity style={styles.muralAvisos}> 
                    <AtividadesPendentes/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.turma}><Turmas/></TouchableOpacity>
                
                
                

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
        bottom: 3,
        margin:10,
        padding:20,
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

    turma:{
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginTop: 30,
        marginBottom: 30,
        boxShadow: '2px 2px 5px #B4B4B4',
    },


});
