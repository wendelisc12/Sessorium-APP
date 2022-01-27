import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from 'react-native-elements/dist/helpers';
import { List } from 'react-native-paper';
import axios from 'axios';

const Stack = createNativeStackNavigator();

export default function Alunos({ navigation }) {

    const [getDados, setDados] = useState([])

    useEffect(() => {
        function consultarDados() {
            axios.get('http://localhost:8080/sessorium/alunos')
                .then(function (response) {
                    setDados(response.data)
                    console.log(response)
                }).catch(function (error) {
                    console.log('erro')
                })
        }

        consultarDados()

    }, [])

    return (



        <View style={styles.container}>
            <Image
                    style={{ width: 160, height: 40, marginVertical: 20,
                    display: 'flex',
                    alignItems: 'center' }}
                    source={require('../images/logo.png')}
                />

            

            <View style={styles.turmasContainer}>
            <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 15 }}>
                    Adicione um aluno
                </Text>
                <TouchableOpacity
                style={{
                    backgroundColor: '#32E535',
                    marginBottom: 20,
                    height: 50,
                    width: '100%',
                    borderRadius: 5,
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    padding: 10,
                }}
                onPress={() => { navigation.navigate('adicionarAluno') }}>
                    <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', fontWeight: '600' }}>Adicionar aluno</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: "700", borderTopColor: '#ccc', borderTopWidth: 1, paddingTop: 15 }}>
                    Lista de alunos:
                </Text>
                <View style={{ marginTop: 10 }}>
                    <Text>A-Z</Text>
                    <View style={{ backgroundColor: '#Cecece', height: 1, marginTop: 10 }}></View>
                </View>

                <View>

                    {
                        getDados.map((l, i) => (

                            <TouchableOpacity onPress={() => { navigation.navigate('alunoDetalhes') }} style={{ borderBottomColor: '#cecece', borderBottomWidth: 1 }}>
                                <List.Item
                                    title={l.nome}
                                    left={props => <List.Icon {...props} icon="account" />}
                                    right={props => <List.Icon {...props} icon="pencil" />}
                                />
                            </TouchableOpacity>


                        ))
                    }






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
        height: '100%'

    },
    turmasContainer: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        margin: 10,
        padding: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%'
    },

    titulo: {
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

    adicionarBotao: {
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
