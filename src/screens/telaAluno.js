import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import AtividadesPendentes from '../pages-aluno/atividadesPendentes';
import Turmas from '../pages-aluno/turmas';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




const Stack = createNativeStackNavigator();

export default function telaAluno() {

   
    return (
        <View style={styles.container}>
           <View >
           <Image source={{uri: 'https://github.com/wendelisc12/Sessorium-APP/blob/main/assets/sessoriulogo.png?raw=true'}}
            style={{width: 200, height: 100}} />
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
        height:100
        
    },

    turmasContainer:{
        backgroundColor: 'white',
        width:'100%',
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
