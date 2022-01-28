import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Routes from "../screens/TelaAlunoRotas";
import { NavigationContainer } from "@react-navigation/native";
import { Avatar, Button } from 'react-native-paper';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Appbar } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function cadastroAtividade({navigation}) {

const [titulo, setTitulo] = useState("")
const [descricao, setDescricao] = useState("")
const [data, setData] = useState("")

    return (
        <View style={styles.container}>


            <View style={styles.formContainer}>
                <View style={styles.logoContainer}>

                    <Image
                        style={{ width: 160, height: 40, marginLeft: 20 }}
                        source={require('../images/logo.png')}
                    />

                </View>
                <View>
                    <Text style={styles.titulos}>Informações da atividade</Text>
                    <Text style={styles.label}>Titulo: </Text>
                    <TextInput style={styles.input} placeholder="Digite o titulo da atividade" keyboardType="default" onChange={titulo => setTitulo(titulo)}/>

                    <Text style={styles.label}>Descrição: </Text>
                    <TextInput style={styles.input} placeholder="Digite a descrição da atividade" keyboardType="default" onChange={descricao => setDescricao(descricao)}/>

                    <Text style={styles.label}>Data de entrega: </Text>
                    <TextInput style={styles.input} placeholder="Digite a data de entrega" keyboardType="default" onChange={data => setData(data)}/>
                </View>

                <View style={styles.botaoEntrarContainer}>
                    <TouchableOpacity style={styles.botaoEntrar}>
                        <Text style={styles.botaoEntrarTexto}>Enviar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoVoltar}>
                        <Text style={styles.botaoVoltarTexto}>voltar</Text>
                    </TouchableOpacity>
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
            marginBottom: 20,
            alignItems: 'center'
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
    });