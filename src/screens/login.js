import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";

const Stack = createNativeStackNavigator();

export default function App() {

    const [login, setLogin] = useState("")
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
        signInWithEmailAndPassword(auth, login, senha)
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
            <View style={styles.logoContainer}>
                <Image
                    style={styles.imagemPerfil}
                    source={{
                        require:('https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-300x300.jpg'),
                    }}
                />

            </View>

            <View style={styles.formContainer}>

                <View>
                    <Text style={styles.label}>Login:</Text>
                    <TextInput style={styles.input} placeholder="Digite seu login" keyboardType="default" value={login} onChange={login => setLogin(login)} />

                    <Text style={styles.label}>Senha:</Text>
                    <TextInput style={styles.input} placeholder="Digite sua Senha" keyboardType="default" value={senha} onChange={senha => setSenha(senha)} />

                    <View style={styles.botaoEntrarContainer}>
                        <TouchableOpacity style={styles.botaoEntrar} onPress={() => {loginFirebase}}>
                            <Text style={styles.botaoEntrarTexto}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.link}>Você é um administrador?</Text>

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
