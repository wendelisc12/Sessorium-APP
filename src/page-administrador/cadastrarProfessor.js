import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";

const Stack = createNativeStackNavigator();

export default function cadastrarProfessor() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [data_nascimento, setData_nascimento] = useState("")
    const [telefone, setTelefone] = useState("")
    const [instituicao, setInstituicao] = useState("")
    const [curso, setCurso] = useState("")
    const [formacao, setFormacao] = useState("")
    const [data_inicio, setData_inicio] = useState("")
    const [data_conclusao, setData_conclusao] = useState("")
    const [siape, setSiape] = useState("")
    const [endereco, setEndereco] = useState("")
    const [uf, setUf] = useState("")
    const [cidade, setCidade] = useState("")
    const [bairro, setBairro] = useState("")
    const [complemento, setComplemento] = useState("")
    const [numero, setNumero] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarsenha, setConfirmarsenha] = useState("")


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
        signInWithEmailAndPassword(auth, nome, email, telefone,cep, estado, cidade, bairro, numero, cnpj, senha, confirmasenha)
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
                    
                    <Image
                        style={{width:160, height: 40, marginLeft: 20}}
                        source={require('../images/logo.png')}
                    />

                </View>
                <View>
                    <Text style={styles.titulos}>Adicione um professor</Text>
                    <Text style={styles.label}>Nome: </Text>
                    <TextInput style={styles.input} placeholder="Digite o nome" keyboardType="default" onChange={nome=> setNome(nome)} />

                    <Text style={styles.label}>Email: </Text>
                    <TextInput style={styles.input} placeholder="Digite o email" keyboardType="default" onChange={email => setEmail(email)} />

                    <Text style={styles.label}>CPF: </Text>
                    <TextInput style={styles.input} placeholder="Digite o cpf" keyboardType="default" onChange={cpf => setCpf(cpf)} />

                    <Text style={styles.label}>Data de nascimento: </Text>
                    <TextInput style={styles.input} placeholder="Digite a sua data de nascimento" keyboardType="default" onChange={data_nascimento => setData_nascimento(data_nascimento)} />

                    <Text style={styles.label}>Telefone: </Text>
                    <TextInput style={styles.input} placeholder="Digite seu telefone" keyboardType="default" onChange={telefone => setTelefone(telefone)} />
                    
                    <Text style={styles.titulos}>Informações acadêmicas </Text>
                    
                    <Text style={styles.label}>Instituição: </Text>
                    <TextInput style={styles.input} placeholder="Digite a sua instituição" keyboardType="default"  onChange={instituicao => setInstituicao(instituicao)} />

                    <Text style={styles.label}>Curso: </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu curso" keyboardType="default"  onChange={curso => setCurso(curso)} />

                    <Text style={styles.label}>Formação: </Text>
                    <TextInput style={styles.input} placeholder="Digite a sua formação" keyboardType="default"  onChange={formacao => setFormacao(formacao)} />
                    
                    <Text style={styles.label}>Data de inicio: </Text>
                    <TextInput style={styles.input} placeholder="Digite a data de inicio" keyboardType="default"  onChange={data_inicio => setData_inicio(data_inicio)} />

                    <Text style={styles.label}>Data de conclusão: </Text>
                    <TextInput style={styles.input} placeholder="Digite a data de conclusão" keyboardType="default"  onChange={data_conclusao => setData_conclusao(data_conclusao)} />

                    <Text style={styles.label}>Siape: </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu Siape" keyboardType="default"  onChange={siape => setSiape(siape)} />

                    <Text style={styles.titulos}>Endereço</Text>

                    <Text style={styles.label}>Endereço: </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu endereço" keyboardType="default"  onChange={endereco => setEndereco(endereco)} />
                    
                    <Text style={styles.label}>UF: </Text>
                    <TextInput style={styles.input} placeholder="Digite sua UF" keyboardType="default"  onChange={uf => setUf(uf)} />

                    <Text style={styles.label}>Cidade: </Text>
                    <TextInput style={styles.input} placeholder="Digite sua cidade" keyboardType="default"  onChange={cidade => setCidade(cidade)} />
                     
                    <Text style={styles.label}>Bairro: </Text>
                    <TextInput style={styles.input} placeholder="Digite seu bairro" keyboardType="default"  onChange={bairro => setBairro(bairro)} />
                     
                    <Text style={styles.label}>complemento: </Text>
                    <TextInput style={styles.input} placeholder="Digite o complemento" keyboardType="default"  onChange={complemento => setComplemento(complemento)} />

                    <Text style={styles.label}>Número: </Text>
                    <TextInput style={styles.input} placeholder="Digite seu número" keyboardType="default"  onChange={numero => setNumero(numero)} />

                    <Text style={styles.titulos}>Acesso</Text>

                    <Text style={styles.label}>Senha: </Text>
                    <TextInput style={styles.input} placeholder="Digite sua Senha" keyboardType="default"  onChange={senha => setSenha(senha)} />

                    <Text style={styles.label}>Confirmar senha: </Text>
                    <TextInput style={styles.input} placeholder="Confirme sua senha" keyboardType="default"  onChange={confirmarsenha => setConfirmarsenha(confirmarsenha)} />

                    <View style={styles.botaoEntrarContainer}>
                        <TouchableOpacity style={styles.botaoEntrar} onPress={() => {loginFirebase}}>
                            <Text style={styles.botaoEntrarTexto}>Enviar</Text>
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
        marginBottom:20,
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