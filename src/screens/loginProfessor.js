import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";
import telaProfessor from '../pages-professor/telaProfessor';

const Stack = createNativeStackNavigator();

export default function loginProfessor({navigation}) {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    
      function loginFirebase() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
          .then((userCredential) => {
            console.log('conectado');
            navigation.navigate('telaProfessor')
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            console.log('não conectado');
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }

    return (
        <View style={styles.container}>
            

            <View style={styles.formContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        style={{width:160, height: 40, marginLeft: 20}}
                        source={require('../images/logo.png')}
                    />

                </View>
                <View>
                <Text style={{ fontSize: 20, textAlign:'center' }}>Professor</Text>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput style={styles.input} placeholder="Digite seu CNPJ" keyboardType="default" value={email} onChangeText={email => setEmail(email)} />

                    <Text style={styles.label}>Senha:</Text>
                    <TextInput style={styles.input} placeholder="Digite sua Senha" keyboardType="default" value={senha} onChangeText={senha => setSenha(senha)} />

                    <View style={styles.botaoEntrarContainer}>
                        <TouchableOpacity style={styles.botaoEntrar} onPress={() => loginFirebase()}>
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
        backgroundColor: "#32E535",
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
        height: '100%',
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

    botaoVoltarTexto: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
   
});
