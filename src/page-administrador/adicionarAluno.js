import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Picker, View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


import { initializeApp } from "firebase/app";

const Stack = createNativeStackNavigator();

export default function adicionarAluno({ navigation }) {

  function cadastroAlunoFirebase() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('usuário cadastrado com sucesso');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('usuário não cadastrado');
        console.log(errorMessage);
        // ..
      });
  }

    const[nome, setNome] = useState("")
    const[email, setEmail] = useState("")
    const[cpf, setCpf] = useState("")
    const[dataNascimento, setDataNascimento] = useState("")
    const[telefone, setTelefone] = useState("")
    const[matricula, setMatricula] = useState("")
    const[nomeResponsavel, setNomeResponsavel] = useState("")
    const[emailResponsavel, setEmailResponsavel] = useState("")
    const[cpfResponsavel, setCpfResponsavel] = useState("")
    const[dataNascimentoResponsavel, setDataNascimentoResponsavel] = useState("")
    const[telefoneResponsavel, setTelefoneResponsavel] = useState("")
    const[cep, setCep] = useState("")
    const[rua, setRua] = useState("")
    const[cidade, setCidade] = useState("")
    const[bairro, setBairro] = useState("")
    const[complemento, setComplemento] = useState("")
    const[numero, setNumero] = useState("")
    const[senha, setSenha] = useState("")

    return (
        <View style={styles.container}>


            <View style={styles.formContainer}>
                <Text style={{ textAlign: 'center', paddingVertical: 20, }}>Sessorium</Text>
                <ScrollView>
                    <View style={{ width: '100%', backgroundColor: '#D3D3D3', height: 1, marginTop: 30 }}></View>
                    <Text style={styles.titulos}>Adicione um Aluno</Text>
                    <Text style={styles.label}>Nome: </Text>
                    <TextInput style={styles.input} placeholder="Digite o nome" keyboardType="default" value={nome} onChange={nome => setNome(nome)} />

                    <Text style={styles.label}>Email: </Text>
                    <TextInput style={styles.input} placeholder="Digite o email" keyboardType="default" value={email} onChange={email => setEmail(email)} />

                    <Text style={styles.label}>CPF: </Text>
                    <TextInput style={styles.input} placeholder="Digite o cpf" keyboardType="default" value={cpf} onChange={cpf => setCpf(cpf)} />

                    <Text style={styles.label}>Data de nascimento: </Text>
                    <TextInput style={styles.input} placeholder="Digite a sua data de nascimento" keyboardType="default" value={dataNascimento} onChange={dataNascimento => setDataNascimento(dataNascimento)} />

                    <Text style={styles.label}>Telefone: </Text>
                    <TextInput style={styles.input} placeholder="Digite seu telefone" keyboardType="default" value={telefone} onChange={telefone => setTelefone(telefone)} />
                    <View style={{ width: '100%', backgroundColor: '#D3D3D3', height: 1, marginTop: 30 }}></View>
                    <Text style={styles.titulos}>Informações importantes </Text>

                    <Text style={styles.label}>Matrícula: </Text>
                    <TextInput style={styles.input} placeholder="Digite a sua matrícula" keyboardType="default" value={matricula} onChange={matricula => setMatricula(matricula)} />

                    <Text style={styles.label}>Possui alguma deficiência? </Text>
                    <TextInput style={styles.input} placeholder="Digite caso tenha" keyboardType="default" value={curso} onChange={curso => setCurso(curso)} />

                    <View style={{ width: '100%', backgroundColor: '#D3D3D3', height: 1, marginTop: 30 }}></View>
                    <Text style={styles.titulos}>Informações do responsável</Text>

                    <Text style={styles.label}>Nome do responsável: </Text>
                    <TextInput style={styles.input} placeholder="Digite o nome" keyboardType="default" value={nomeResponsavel} onChange={nomeResponsavel => setNomeResponsavel(nomeResponsavel)} />

                    <Text style={styles.label}>Email do responsável: </Text>
                    <TextInput style={styles.input} placeholder="Digite o email" keyboardType="default" value={emailResponsavel} onChange={emailResponsavel => setEmailResponsavel(emailResponsavel)} />

                    <Text style={styles.label}>CPF do responsável: </Text>
                    <TextInput style={styles.input} placeholder="Digite o CPF" keyboardType="default" value={cpfResponsavel} onChange={cpfResponsavel => setCpfResponsavel(cpfResponsavel)} />

                    <Text style={styles.label}>Data de nascimento do responsável: </Text>
                    <TextInput style={styles.input} placeholder="Digite a data de nascimento" keyboardType="default" value={dataNascimentoResponsavel} onChange={dataNascimentoResponsavel => setDataNascimentoResponsavel(dataNascimentoResponsavel)} />

                    <Text style={styles.label}>Telefone do responsável: </Text>
                    <TextInput style={styles.input} placeholder="Digite o telefone" keyboardType="default" value={telefoneResponsavel} onChange={telefoneResponsavel => setTelefoneResponsavel(telefoneResponsavel)} />

                    <View style={{ width: '100%', backgroundColor: '#D3D3D3', height: 1, marginTop: 30 }}></View>
                    <Text style={styles.titulos}>Endereço</Text>

                    <Text style={styles.label}>CEP: </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu endereço" keyboardType="default" value={cep} onChange={cep => setCep(cep)} />

                    <Text style={styles.label}>Rua: </Text>
                    <TextInput style={styles.input} placeholder="Digite sua UF" keyboardType="default" value={rua} onChange={rua => setRua(rua)} />

                    <Text style={styles.label}>Cidade: </Text>
                    <TextInput style={styles.input} placeholder="Digite sua cidade" keyboardType="default" value={cidade} onChange={cidade => setCidade(cidade)} />

                    <Text style={styles.label}>Bairro: </Text>
                    <TextInput style={styles.input} placeholder="Digite seu bairro" keyboardType="default" value={bairro} onChange={bairro => setBairro(bairro)} />

                    <Text style={styles.label}>complemento: </Text>
                    <TextInput style={styles.input} placeholder="Digite o complemento" keyboardType="default" value={complemento} onChange={complemento => setComplemento(complemento)} />

                    <Text style={styles.label}>Número: </Text>
                    <TextInput style={styles.input} placeholder="Digite seu número" keyboardType="default" value={numero} onChange={numero => setNumero(numero)} />

                    <View style={{ width: '100%', backgroundColor: '#D3D3D3', height: 1, marginTop: 30 }}></View>
                    <Text style={styles.titulos}>Acesso</Text>

                    <Text style={styles.label}>Senha: </Text>
                    <TextInput style={styles.input} placeholder="Digite sua Senha" keyboardType="default" value={senha} onChange={senha => setSenha(senha)} />

                    <View style={styles.botaoEntrarContainer}>
                        <TouchableOpacity style={styles.botaoEntrar} onPress={()=> {cadastroAlunoFirebase}}>
                            <Text style={styles.botaoEntrarTexto}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

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