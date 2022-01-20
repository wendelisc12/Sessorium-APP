import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'



export default function loginSeletivo({navigation}) {


    return (
        <View style={{ flex: 1 }} >
            <Appbar.Header style={{ backgroundColor: '#32E535' }}>

                <Appbar.Content title="Sessorium" style={styles.titulo} />

            </Appbar.Header>

            <View style={styles.containerPergunta} >
                <Text style={styles.pergunta}>Quem é você?</Text>
            </View>

            <ScrollView>
                <View style={styles.containerQuadrado}>
                    <TouchableOpacity style={styles.quadrado} onPress={() => { navigation.navigate('login') } }>
                    
                        <View style={styles.conteudo}>

                            <View style={styles.containerIcon}>
                                <Icon name='user-o' size={30} color='rgb(36, 36, 36)'/>
                            </View>

                            <View style={styles.containerPessoa}>
                                <Text  style={styles.pessoa}> Estudante </Text>
                            </View>
                            
                        </View>
                       

                   
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.quadrado} onPress={() => { navigation.navigate('loginProfessor') } }>
                    
                        <View style={styles.conteudo}>

                            <View style={styles.containerIcon}>
                                <Icon name='user-o' size={30} color='rgb(36, 36, 36)'/>
                            </View>

                            <View style={styles.containerPessoa}>
                                <Text  style={styles.pessoa}> Professor </Text>
                            </View>
                            
                        </View>
                       

                   
                    </TouchableOpacity>
                    

                    <TouchableOpacity style={styles.quadrado} onPress={() => { navigation.navigate('loginPais') } }>
                    
                        <View style={styles.conteudo}>

                            <View style={styles.containerIcon}>
                                <Icon name='user-o' size={30} color='rgb(36, 36, 36)'/>
                            </View>

                            <View style={styles.containerPessoa}>
                                <Text  style={styles.pessoa}> Pais </Text>
                            </View>
                            
                        </View>
                  
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.quadrado} onPress={() => { navigation.navigate('loginAdministrador') } }>
                    
                        <View style={styles.conteudo}>

                            <View style={styles.containerIcon}>
                                <Icon name='user-o' size={30} color='rgb(36, 36, 36)'/>
                            </View>

                            <View style={styles.containerPessoa}>
                                <Text  style={styles.pessoa}>administrador</Text>
                            </View>
                            
                        </View>
                  
                    </TouchableOpacity>
                    


                </View>


            </ScrollView>

        </View>






    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EFEFEF",
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',

    },

    containerPergunta: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    },

    pergunta: {
        color: 'black',
        fontSize: 20
    },

    containerQuadrado: {
       width: '100%',
       display: 'flex',
       alignItems: 'center'


    },
    quadrado: {
        width: '60%',
        height: 150,
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        border: '1px solid rgba(3, 3, 3, 0.171)',
        boxShadow: '2px 2px 5px gray'
    },

    conteudo:{
        padding: 20,
       
    },

    containerIcon:{
        textAlign: 'center'
    },

    containerPessoa:{
        textAlign: 'center',
        marginTop: 10
    },

    pessoa:{
        fontSize: 25,
        fontWeight: '300'
    },

});