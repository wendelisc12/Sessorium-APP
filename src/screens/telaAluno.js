import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import AtividadesPendentes from '../componentes/atividadesPendentes';
import Turmas from '../componentes/turmas';
import Routes from '../routes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





const Stack = createNativeStackNavigator();

export default function telaAluno() {

   
    return (

        <View style={styles.container}>
            
           <View style={styles.containerTitulo}>
               <Text style={styles.titulo}>Sessorium</Text>
           </View>
            
          

            <View style={styles.turmasContainer}>
                <View style={{marginBottom: 30}}> 
                    <AtividadesPendentes/>
                </View>

                <Turmas/>
                <Turmas/>
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
        display:'flex'
    },

    containerTitulo:{
        alignItems: 'center',
        justifyContent:'center',
        height:100,
        position: 'sticky',
        top: 0,
        
        
    },

    turmasContainer:{
        backgroundColor: 'white',
        width:'100%',
        height: '95vh',
        bottom: 3,
        margin:10,
        padding:20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },

    titulo:{
       fontSize:30
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
