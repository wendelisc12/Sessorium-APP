import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function atividade({navigation}) {


    return (
        <View style={styles.container}>
            
            <View style={{height: '100%'}}>
                <View style={styles.atividadeTitulo}>
                    <Text style={{fontWeight: 600, fontSize: 22}}>Atividade Titulo</Text>
                </View>

                <ScrollView style={styles.atividadeDescricao}>
                    <Text style={{fontSize: 16}}>descricao</Text>
                </ScrollView>

                <View style={{display: 'flex', alignItems: 'center', marginBottom: 20}}>
                    <Button icon="upload" mode="contained" onPress={() => { navigation.navigate('login') } } style={{width: 300, height: 60, marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        Carregar arquivo
                    </Button>
                    <Button icon="file" mode="contained" onPress={() => { navigation.navigate('login') } } style={{width: 300}}>
                        Enviar atividade
                    </Button>
                </View>

            </View>

        </View>






    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: '100%'
    },

    principalContainer: {
        backgroundColor: 'white',
        width: '100%',
        bottom: 3,
        padding: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    logoContainer: {
        height: 100,
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
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

    atividadeTitulo:{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 20,
    },

    atividadeDescricao:{
        padding: 20,
        border: '1px solid #ccc',
        margin: 10,
        borderRadius: 20
        
    }

});
