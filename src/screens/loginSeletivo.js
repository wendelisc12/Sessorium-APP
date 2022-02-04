import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'



export default function loginSeletivo({navigation}) {


    return (
        <View style={{height: '100%', display: 'flex', justifyContent: 'space-between'}} >

            <View style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Image
                    style={{ width: 160, height: 40, marginVertical: 20,
                    display: 'flex',
                    alignItems: 'center' }}
                    source={require('../images/logo.png')}
                />
            </View>

            <View style={styles.principal} >
                <View style={{paddingTop: 20}}>
                    <Text style={styles.pergunta}>Fazer login como:</Text>
                </View>

                <View style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                    <Button icon="account" mode="contained" onPress={() => { navigation.navigate('login') } } style={styles.botaoLogin}>
                        Aluno
                    </Button>

                    <Button icon="account" mode="contained" onPress={() => { navigation.navigate('loginProfessor') } } style={styles.botaoLogin}>
                        Professor
                    </Button>
                </View>

                <View style={{paddingBottom: 20}}>
                    <TouchableOpacity  onPress={() => { navigation.navigate('loginAdministrador') } }>
                        <Text style={{fontSize: 16, fontWeight: 600}}>Entrar como administrador</Text>
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
        display: 'flex',

    },

    principal: {
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    pergunta: {
        color: '#1d1d1d',
        fontSize: 20,
        fontWeight: 600
    },

    botaoLogin:{
        width: '90%',
        height: 50,
        marginVertical: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#32E535'
    }

});