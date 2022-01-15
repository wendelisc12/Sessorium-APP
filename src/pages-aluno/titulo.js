import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import AtividadesPendentes from '../pages-aluno/atividadesPendentes';
import Turmas from '../pages-aluno/turmas';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




const Stack = createNativeStackNavigator();

export default function Titulo() {

   
    return (
        
           <View style={styles.container}>
                <Image source={{uri: 'https://github.com/wendelisc12/Sessorium-APP/blob/main/assets/seso.png?raw=true'}}
            style={{width: 400, height: 100}} />
            </View>



        
    );
}

const styles = StyleSheet.create({
    container: {
        height:100,
        width:400,
    },

   

});
