import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from 'react-native-elements/dist/helpers';
import { List } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function Alunos({navigation}) {

   
    return (

        <View style={styles.container}>
            <Text style={styles.titulo}>Sessorium</Text>

            <View style={styles.turmasContainer}>
              <Text style={{fontSize: 20, fontWeight: '700'}}>Alunos:</Text>
              <View style={{marginTop: 10}}>
                <Text>A-Z</Text>
                <View style={{backgroundColor: '#Cecece', height: 1, marginTop: 10}}></View>
              </View>

              <View>
                <TouchableOpacity onPress={()=> {navigation.navigate('alunoDetalhes')}} style={{borderBottomColor: '#cecece', borderBottomWidth: 1}}>
                    <List.Item
                      title="Aluno Nome"
                      description="Série: 2B"
                      left={props => <List.Icon {...props} icon="account" />}
                      right={props => <List.Icon {...props} icon="pencil" />}
                    />
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
       height: 50,
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
