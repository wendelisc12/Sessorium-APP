import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";
import Turmas from './turmas';
import NavAluno from './NavAluno';



export default function telaAluno() {

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text style={styles.titulo}>Sessorium</Text>
            </View>
            
            <View style={styles.conteudo}>
                <Text style={styles.materias}>Matérias</Text>

                <Turmas/>
                <Turmas/>
                
                
                
            </View>
            <View style={styles.navegacao}>
                <NavAluno/>
            </View>
           



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFEFEF",
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    navbar: {
       width: '100%',
       height: 50,
       display: 'flex',
       justifyContent: 'center',
       textAlign: 'center',
       backgroundColor: '#663399',
       borderBottomEndRadius: 15,
 
    },

    titulo:{
        textAlign:'left',
        marginLeft: 20,
        fontSize: 25,
        color:'white',
    },

    conteudo:{
        
        height: '90%',
        width:'100%',
        paddingHorizontal: 30,
        
    },

    materias:{
        textAlign: 'left',
        fontSize: 25,
        marginVertical: 15

    },
    
    navegacao:{
        width: '100%',
        backgroundColor:'green',
        position:'relative',
        bottom: 0
    }

});