import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function loginProfessor({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>


            </View>

            <View style={styles.formContainer}>

                <View>
                    <Text style={{ marginLeft: 35, fontSize: 20 }}>Você está logando como Professor</Text>
                    <Text style={styles.label}>Login:</Text>
                    <TextInput style={styles.input} placeholder="Digite seu login" keyboardType="default" onChange={login => setLogin(login)} />

                    <Text style={styles.label}>Senha:</Text>
                    <TextInput style={styles.input} placeholder="Digite sua Senha" keyboardType="default" onChange={senha => setSenha(senha)} />

                    <View style={styles.botaoEntrarContainer}>
                        <TouchableOpacity style={styles.botaoEntrar} onPress={() => { loginFirebase }}>
                            <Text style={styles.botaoEntrarTexto}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botaoVoltar} onPress={() => { navigation.navigate('loginSeletivo')  }}>
                            <Text style={styles.botaoVoltarTexto}>voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>


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

    logoContainer: {
        top: 0,
        height: '40%',
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
        height: '60%',
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

    input: {
        backgroundColor: '#F2F2F2',
        height: 50,
        borderRadius: 10,
        paddingLeft: 10
    },

    label: {
        marginTop: 10,
        marginBottom: 5
    },
    botaoEntrar: {
        width: '100%',
        height: 44,
        backgroundColor: '#32E535',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoVoltar: {
        width: '100%',
        height: 44,
        backgroundColor: 'transparent',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #32E535',
        marginTop: 20,
        marginBottom: 40,
    },

    botaoEntrarContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center'
    },

    botaoEntrarTexto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },

    botaoVoltarTexto: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },

   
});