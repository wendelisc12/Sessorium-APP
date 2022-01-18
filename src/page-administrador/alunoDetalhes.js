import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from 'react-native-elements/dist/helpers';
import { Button } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function AlunoDetalhe({ navigation }) {


    return (

        <View style={styles.container}>


            <View style={styles.formContainer}>
                <Text style={{ textAlign: 'center', paddingVertical: 20, }}>Sessorium</Text>
                <ScrollView>
                    <View style={{ width: '100%', backgroundColor: '#D3D3D3', height: 1, marginTop: 30 }}></View>
                    <Text style={styles.titulos}>Adicione um Aluno</Text>
                    <Text style={styles.label}>Nome: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <Text style={styles.label}>Email: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <Text style={styles.label}>CPF: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <Text style={styles.label}>Data de nascimento: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <Text style={styles.label}>Telefone: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <View style={{ width: '100%', backgroundColor: '#D3D3D3', height: 1, marginTop: 30 }}></View>
                    <Text style={styles.titulos}>Informações importantes </Text>

                    <Text style={styles.label}>Matrícula: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <Text style={styles.label}>Possui alguma deficiência? </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <View style={{ width: '100%', backgroundColor: '#D3D3D3', height: 1, marginTop: 30 }}></View>
                    <Text style={styles.titulos}>Informações do responsável</Text>

                    <Text style={styles.label}>Nome do responsável: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <Text style={styles.label}>Email do responsável: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <Text style={styles.label}>CPF do responsável: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <Text style={styles.label}>Data de nascimento do responsável: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <Text style={styles.label}>Telefone do responsável: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <View style={{ width: '100%', backgroundColor: '#D3D3D3', height: 1, marginTop: 30 }}></View>
                    <Text style={styles.titulos}>Endereço</Text>

                    <Text style={styles.label}>Endereço: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <Text style={styles.label}>UF: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <Text style={styles.label}>Cidade: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <Text style={styles.label}>Bairro: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <Text style={styles.label}>complemento: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <Text style={styles.label}>Número: </Text>
                    <Text style={styles.infoInput}>nome</Text>

                    <View style={styles.botaoDetalhesContainer}>
                        <Button icon="camera" style={styles.botaoEditar} mode="contained" onPress={() => console.log('Pressed')}>
                            Editar
                        </Button>
                        <Button icon="camera" style={styles.botaoExcluir} mode="contained" onPress={() => console.log('Pressed')}>
                            Excluir
                        </Button>
                    </View>
                </ScrollView>

            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#cecece",
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    logoContainer: {
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        backgroundColor: 'red',
        width: 105,
    },

    formContainer: {
        width: '100%',
        height: '90%',
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        margin: 10,
        display: 'flex',
        paddingTop: 50,
        padding: 20,
        display: 'flex',
        justifyContent: 'space-between'
    },

    infoInput: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 500
    },

    label: {
        marginTop: 15,
        marginBottom: 5
    },

    titulos: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },

    botaoEditar: {
        width: '80%',
        height: 44,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,
        backgroundColor: '#489CFF'

    },
    botaoExcluir: {
        width: '80%',
        height: 44,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF4646'
    },

    botaoDetalhesContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 20,
        alignItems: 'center'

    },

    botaoEntrarTexto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },

    link: {
        color: '#1D1D1D',
        marginTop: 20,
        textAlign: 'center',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000"
    }
});