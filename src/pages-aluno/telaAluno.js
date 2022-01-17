import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import AtividadesPendentes from '../componentes/atividadesPendentes';
import Turmas from '../componentes/turmas';
import Routes from '../screens/TelaAlunoRotas';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





const Stack = createNativeStackNavigator();

export default function telaAluno() {

   
    return (

        <View style={styles.container}>
            
           
            <Text style={styles.titulo}>Sessorium</Text>
           
            
          

            <View style={styles.turmasContainer}>
                <View> 
                    <AtividadesPendentes/>
                </View>

                <Turmas/>
                
                

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
       fontSize:30,
       position:'sticky',
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

});
