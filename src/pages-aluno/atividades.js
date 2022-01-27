import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';





const Stack = createNativeStackNavigator();

export default function Atividades({navigation}) {


    return (
        <View style={{ flex: 1 }} >
            <View style={styles.logoContainer}>
                <Image
                    style={{ width: 160, height: 40, marginHorizontal: 'auto' }}
                    source={require("../images/logo.png")}
                />
            </View>
            <View style={styles.principalContainer}>
                <Text style={{ fontSize: 22, fontWeight: 600 }}>Atividades:</Text>
                <View style={{ backgroundColor: '#ccc', height: 1, marginTop: 10 }}></View>

                <ScrollView style={{ marginTop: 20 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('atividade') }} style={{
                        width: '100%', height: 140, border: '1px solid #ccc', marginHorizontal: 'auto', borderRadius: 20,
                        boxShadow: '0px 5px 10px #ccc'
                    }}>
                        <View style={{borderBottomColor: '#ccc', borderBottomWidth: 1, padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 16, fontWeight: 600}}>Atividade nome</Text>
                            <View style={{width: 30, height: 20, backgroundColor: 'red', borderRadius: 5, marginRight: 10}}></View>
                        </View>
                        <View style={{padding: 10}}>
                            <Text numberOfLines={4}>Descricao atividade</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

            </View>

        </View>






    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EFEFEF",
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        height: '100%',
    },

    principalContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        bottom: 3,
        padding: 20,
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
