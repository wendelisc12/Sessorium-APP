import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";

const Stack = createNativeStackNavigator();

export default function cadastrarcoordenador() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cep, setCep] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [bairro, setBairro] = useState("")
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmasenha, setConfirmaSenha] = useState("")


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
        signInWithEmailAndPassword(auth, nome, email, telefone,cep, estado, cidade, bairro, endereco, numero, cnpj, senha, confirmasenha)
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
            

            <View style={styles.formContainer}>
                <View style={styles.logoContainer}>
                    <Text>Sessorium</Text>
                    <Image
                        style={styles.imagemPerfil}
                        source={{
                            require:('https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-300x300.jpg'),
                        }}
                    />

                </View>
                <View>
                    <Text style={styles.titulos}>Informações básicas</Text>
                    <Text style={styles.label}>Nome: </Text>
                    <TextInput style={styles.input} placeholder="Digite o nome" keyboardType="default" value={nome} onChange={nome=> setNome(nome)} />

                    <Text style={styles.label}>Email: </Text>
                    <TextInput style={styles.input} placeholder="Digite o email" keyboardType="default" value={email} onChange={email => setEmail(email)} />

                    <Text style={styles.label}>Telefone: </Text>
                    <TextInput style={styles.input} placeholder="Digite o Telefone" keyboardType="default" value={telefone} onChange={telefone => setTelefone(telefone)} />
                    
                    <Text style={styles.titulos}>Endereço da instituição </Text>
                    
                    <Text style={styles.label}>CEP: </Text>
                    <TextInput style={styles.input} placeholder="Digite o CEP" keyboardType="default" value={cep} onChange={cep => setCep(cep)} />

                    <Text style={styles.label}>Estado: </Text>
                    <TextInput style={styles.input} placeholder="Digite o estado" keyboardType="default" value={estado} onChange={estado => setEstado(estado)} />

                    <Text style={styles.label}>Cidade: </Text>
                    <TextInput style={styles.input} placeholder="Digite a cidade" keyboardType="default" value={cidade} onChange={cidade => setCidade(cidade)} />
                    
                    <Text style={styles.label}>Bairro: </Text>
                    <TextInput style={styles.input} placeholder="Digite o bairro" keyboardType="default" value={bairro} onChange={bairro => setBairro(bairro)} />

                    <Text style={styles.label}>Endereço: </Text>
                    <TextInput style={styles.input} placeholder="Digite o endereço" keyboardType="default" value={endereco} onChange={endereco => setEndereco(endereco)} />

                    <Text style={styles.label}>Número: </Text>
                    <TextInput style={styles.input} placeholder="Digite o Número" keyboardType="default" value={numero} onChange={endereco => setNumero(numero)} />

                    <Text style={styles.titulos}>Informações importantes</Text>

                    <Text style={styles.label}>CNPJ: </Text>
                    <TextInput style={styles.input} placeholder="Digite o CNPJ" keyboardType="default" value={cnpj} onChange={cnpj => setCnpj(cnpj)} />
                    
                    <Text style={styles.label}>Senha: </Text>
                    <TextInput style={styles.input} placeholder="Digite a senha" keyboardType="default" value={senha} onChange={senha => setSenha(senha)} />

                    <Text style={styles.label}>Confirmar senha: </Text>
                    <TextInput style={styles.input} placeholder="Confirme a senha" keyboardType="default" value={confirmasenha} onChange={confirmasenha => setConfirmaSenha(confirmasenha)} />

                    <View style={styles.botaoEntrarContainer}>
                        <TouchableOpacity style={styles.botaoEntrar} onPress={() => {loginFirebase}}>
                            <Text style={styles.botaoEntrarTexto}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.link}>Registrar nova escola</Text>

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
    
    titulos:{
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20
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