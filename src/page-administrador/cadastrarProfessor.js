import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';
import { initializeApp } from "firebase/app";

const Stack = createNativeStackNavigator();

export default function cadastrarProfessor({navigation}) {

    function cadastroProfessorFirebase() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('usuário cadastrado com sucesso');
            console.log(user);
            cadastrarDado()
            navigation.navigator('painel')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('usuário não cadastrado');
            console.log(errorMessage);
            // ..
          });
      }

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cpf, setCpf] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")
<<<<<<< HEAD
    const [telefone, setTelefone] = useState("")
    const [instituto, setInstituto] = useState("")
    const [cursoNome, setCursoNome] = useState("")
    const [formacao, setFormacao] = useState("")
=======
    const [municipio, setMunicipio] = useState("")
    const [uf,setUf] = useState("")
    const [cursoNome, setCursoNome] = useState("")
>>>>>>> 1ab979e76be0f9473fa9bc05b655720cb3280e70
    const [dataInicio, setDataInicio] = useState("")
    const [dataConclusao, setDataConclusao] = useState("")
    const [instituto, setInstituto] = useState("")
    const [formacao, setFormacao] = useState("")
    const [siape, setSiape] = useState("")
<<<<<<< HEAD
    const[cep, setCep] = useState("")
    const[rua, setRua] = useState("")
    const[municipio, setMunicipio] = useState("")
    const[bairro, setBairro] = useState("")
    const[complemento, setComplemento] = useState("")
    const[numero, setNumero] = useState("")
=======
>>>>>>> 1ab979e76be0f9473fa9bc05b655720cb3280e70

    function cadastrarDado(){


        let professor = {
            nome: nome,
            email: email,
            telefone: telefone,
            cpf: cpf,
            dataNascimento: dataNascimento,
<<<<<<< HEAD
            telefone: telefone,
            instituto: instituto,
            cursoNome: cursoNome,
            formacao: formacao,
            dataInicio: dataInicio,
            dataConclusao: dataConclusao,
            siape: siape,
            cep: cep,
            rua: rua,
            municipio: municipio,
            bairro: bairro,
            complemento: complemento,
            numero: numero
            
            
        })
            .then(function (response) {
                console.log(response);
                navigation.navigate('Contatos');
            })
            .catch(function (error) {
                console.log(error);
            });
=======
            municipio: municipio,
            uf: uf,
            cursoNome: cursoNome,
            dataInicio: dataInicio,
            dataConclusao: dataConclusao,
            instituto: instituto,
            siape: siape
        }
        
        axios.post("http://localhost:8080/sessorium/professor", professor ,{
        headers: {'Content-Type': 'application/json'}
      }).then(function(response) {
        console.log(response);
      }).catch(function(error) {
        console.log(error);
      })

        // axios.post('http://localhost:8080/sessorium/professor', professor)
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error.response.data);
        //         console.log('no')
        //     });
>>>>>>> 1ab979e76be0f9473fa9bc05b655720cb3280e70

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
                    <Text style={styles.titulos}>Adicione um professor</Text>
                    <Text style={styles.label}>Nome: </Text>
                    <TextInput style={styles.input} placeholder="Digite o nome" keyboardType="default" value={nome} onChangeText={nome=> setNome(nome)} />

                    <Text style={styles.label}>Email: </Text>
                    <TextInput style={styles.input} placeholder="Digite o email" keyboardType="default" value={email} onChangeText={email => setEmail(email)} />

                    <Text style={styles.label}>CPF: </Text>
                    <TextInput style={styles.input} placeholder="Digite o cpf" keyboardType="default" value={cpf} onChangeText={cpf => setCpf(cpf)} />

                    <Text style={styles.label}>Data de nascimento: </Text>
                    <TextInput style={styles.input} placeholder="Digite sua data de nascimento" keyboardType="default" value={dataNascimento} onChangeText={dataNascimento => setDataNascimento(dataNascimento)} />

                    <Text style={styles.label}>Telefone: </Text>
                    <TextInput style={styles.input} placeholder="Digite seu telefone" keyboardType="default" value={telefone} onChangeText={telefone => setTelefone(telefone)} />
                    
                    <Text style={styles.titulos}>Informações acadêmicas </Text>
                    
                    <Text style={styles.label}>Instituição: </Text>
                    <TextInput style={styles.input} placeholder="Digite a sua instituição" keyboardType="default" value={instituto} onChangeText={instituto => setInstituto(instituto)} />

<<<<<<< HEAD
                    <Text style={styles.label}>Curso: </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu curso" keyboardType="default" value={cursoNome} onChangeText={cursoNome => setCursoNome(cursoNome)} />

                    <Text style={styles.label}>Formação: </Text>
                    <TextInput style={styles.input} placeholder="Digite a sua formação" keyboardType="default" value={formacao} onChangeText={formacao => setFormacao(formacao)} />
                    
                    <Text style={styles.label}>Data de inicio: </Text>
                    <TextInput style={styles.input} placeholder="Digite a data de inicio" keyboardType="default" value={dataInicio}  onChangeText={dataInicio => setDataInicio(dataInicio)} />

                    <Text style={styles.label}>Data de conclusão: </Text>
                    <TextInput style={styles.input} placeholder="Digite a data de conclusão" keyboardType="default" value={dataConclusao}  onChangeText={dataConclusao => setDataConclusao(dataConclusao)} />

                    <Text style={styles.label}>Siape: </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu Siape" keyboardType="default" value={siape}  onChangeText={siape => setSiape(siape)} />

                    <Text style={styles.titulos}>Endereço</Text>

                    <Text style={styles.label}>CEP: </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu endereço" keyboardType="default" value={cep} onChangeText={cep => setCep(cep)} />

                    <Text style={styles.label}>Rua: </Text>
                    <TextInput style={styles.input} placeholder="Digite sua UF" keyboardType="default" value={rua} onChangeText={rua => setRua(rua)} />

                    <Text style={styles.label}>Municipio: </Text>
                    <TextInput style={styles.input} placeholder="Digite sua cidade" keyboardType="default" value={municipio} onChangeText={municipio => setMunicipio(municipio)} />

                    <Text style={styles.label}>Bairro: </Text>
                    <TextInput style={styles.input} placeholder="Digite seu bairro" keyboardType="default" value={bairro} onChangeText={bairro => setBairro(bairro)} />

                    <Text style={styles.label}>complemento: </Text>
                    <TextInput style={styles.input} placeholder="Digite o complemento" keyboardType="default" value={complemento} onChangeText={complemento => setComplemento(complemento)} />

                    <Text style={styles.label}>Número: </Text>
                    <TextInput style={styles.input} placeholder="Digite seu número" keyboardType="default" value={numero} onChangeText={numero => setNumero(numero)} />

                    <Text style={styles.titulos}>Acesso</Text>

                    <Text style={styles.label}>Senha: </Text>
                    <TextInput style={styles.input} placeholder="Digite sua Senha" keyboardType="default" value={senha}  onChangeText={senha => setSenha(senha)} />

                    <Text style={styles.label}>Confirmar senha: </Text>
                    <TextInput style={styles.input} placeholder="Confirme sua senha" keyboardType="default"  onChangeText={confirmarsenha => setConfirmarsenha(confirmarsenha)} />

=======
                    <Text style={styles.label}>Siape: </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu Siape" keyboardType="default" value={siape}  onChangeText={siape => setSiape(siape)} />
>>>>>>> 1ab979e76be0f9473fa9bc05b655720cb3280e70
                    <View style={styles.botaoEntrarContainer}>
                        <TouchableOpacity style={styles.botaoEntrar} onPress={() => cadastrarDado()}>
                            <Text style={styles.botaoEntrarTexto}>Enviar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botaoVoltar} onPress={() => { navigation.navigate('professores')  }}>
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

    botaoEntrarTexto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },

    botaoVoltar: {
        width: '80%',
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

    link: {
        color: '#1D1D1D',
        marginTop: 20,
        textAlign: 'center',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000"
    }
});
