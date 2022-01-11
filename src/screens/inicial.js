import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { appRoutes } from '../routes/app-routes';

const Stack = createNativeStackNavigator();

export default function loginAdministrador({navigation}) {

    const [cnpj, setCnpj] = useState("")
    const [senha, setSenha] = useState("")

    const firebaseConfig = {
        apiKey: "AIzaSyCvMu2Bhpgs22hLMYyHyd7wiyfnfWaOqhA",
        authDomain: "sessorium-cede5.firebaseapp.com",
        projectId: "sessorium-cede5",
        storageBucket: "sessorium-cede5.appspot.com",
        messagingSenderId: "531906212353",
        appId: "1:531906212353:web:583f425cfbad2cd74cc600",
        measurementId: "G-0VGDK739RL"
    };

    function loginFirebase() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, cnpj, senha)
            .then((userCredential) => {
                console.log('conectado')
                const user = userCredential.user;
            })
            .catch((error) => {
                console.log("não conectado")
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    return (
        <View style={styles.container}>
            <Text>Teste</Text>
            <appRoutes />

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
        width: '80%',
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

    link: {
        color: '#1D1D1D',
        marginTop: 20,
        textAlign: 'center',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000"
    }
});
