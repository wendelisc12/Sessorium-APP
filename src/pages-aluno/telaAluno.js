import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import AtividadesPendentes from '../componentes/atividadesPendentes';
import Turmas from '../componentes/turmas';
import Routes from '../screens/TelaAlunoRotas';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';





const Stack = createNativeStackNavigator();

export default function telaAluno() {


    return (
        <View style={{ flex: 1 }} >
            <Appbar.Header style={{backgroundColor: 'green'}}>
                
                <Appbar.Content title="Sessorium"/>
                
            </Appbar.Header>
            <ScrollView>
                <AtividadesPendentes />
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>
                <Turmas/>

            </ScrollView>

        </View>






    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EFEFEF",
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',

    },



    turmasContainer: {
        backgroundColor: 'white',
        width: '100%',
        bottom: 3,
        margin: 10,
        padding: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    titulo: {
        fontSize: 30,
        position: 'sticky',
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
