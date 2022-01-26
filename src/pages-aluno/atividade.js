import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';





const Stack = createNativeStackNavigator();

export default function Perfil() {


    return (
        <View style={{ flex: 1 }}>
            
            <ScrollView>
                

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

});
