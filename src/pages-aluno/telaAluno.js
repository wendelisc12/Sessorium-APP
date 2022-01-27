import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
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

export default function telaAluno({navigation}) {
    return (
        <View style={{ height: "100%" }}>
            <LinearGradient style={styles.header}  colors={['#3ef741','#36f339']}>
                <View style={styles.headerLogo}>
                    <Image
                        style={{width:160, height: 40, marginLeft: 20}}
                        source={require('../images/logo.png')}
                    />
                </View>
                <View  style={styles.headerPerfil} >
                    <TouchableOpacity style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center',flex:1}} >
                        <View style={styles.perfilInfo}>
                            <Text style={{ fontSize: 20, fontWeight: 600, color: 'white'}}>ALUNO NOME</Text>
                            <Text style={{ fontSize: 15, fontWeight: 400, color: 'white' }}>TURMA</Text>
                        </View>

                        <View>
                        <Image
                            style={{width: 35, height: 35, marginLeft: 20, borderRadius: '50%'}}
                            source={require('../images/icon-pontos.svg')}
                        />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.perfilFoto}>
                        <Avatar.Image size={80} style={styles.foto} source={require('../images/avatar.jpg')} />
                    </View>
                </View >
            </LinearGradient>

            <ScrollView style={styles.main}>
                <View style={styles.atividadesPendentesContainer}>
                    <Text style={{ fontSize: 20, fontWeight: 600 }}>Atividades:</Text>
                    <TouchableOpacity style={styles.atividadesPendentes} onPress={() => { navigation.navigate('atividades')  }}>
                        <View
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexDirection: "row",
                                height: "100%",
                            }}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    paddingLeft: 5,
                                    alignItems: "center",
                                    textAlign: 'left',
                                }}
                            >
                                <Text style={{ marginRight: 5, fontSize: 18, fontWeight: 600 }}>0</Text>{" "}
                                <Text style={{ fontSize: 18, fontWeight: 600 }}>Atividades Pendentes</Text>
                            </View>

                            <View
                                style={{ width: 30, height: 30}}
                            >
                                <Image
                                    style={{width: 30, height: 30}}
                                    source={require('../images/icon-seta.svg')}
                                />

                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.materias}>
                    <TouchableOpacity style={styles.materiaContainer}>
                        <View style={styles.nomeMateria}>
                            <Text style={{ fontSize: 25, fontWeight: 600, color: '#fff' }}>História</Text>
                        </View>
                        <View style={styles.professor}>
                            <Text style={{ fontWeight: 600, fontSize: 16 }}>Professor:</Text>
                            <Text style={{ fontWeight: 600, fontSize: 16 }}>
                                NomeProfessor
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        height: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    headerLogo: {
        paddingTop: 10,
        marginBottom: 10,
        width: "100%",
        textAlign: "center",
        display: 'flex',
        alignItems: 'center'
    },

    headerPerfil: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
    },

    perfilInfo: {
        flex: 1,
        textAlign: "right",
        display: "flex",
        paddingHorizontal: 10,
        justifyContent: "center",
    },

    perfilFoto: {
        width: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    foto: {
        border: "4px solid #fff",
        width: 80,
        height: 80,
        borderRadius: "50%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    main: {
        height: "100%",
    },

    atividadesPendentesContainer: {
        height: 140,
        padding: 10,
        borderBottomColor: "#cfcfcf",
        borderBottomWidth: 1,
    },
    atividadesPendentes: {
        marginTop: 10,
        height: 70,
        borderRadius: 10,
        boxShadow: "1px 3px 10px #cfcfcf",
        padding: 10,
    },

    materias: {
        marginTop: 20,
        width: "95%",
        borderRadius: 10,
        marginHorizontal: "auto",
        padding: 20,
        backgroundColor: "#ededed",
        height: "100%",
    },

    materiaContainer: {
        border: "1px solid #d6d6d6",
        height: 150,
        borderRadius: 20,
        boxShadow: "2px 2px 10px #d6d6d6",
        display: "flex",
    },
    nomeMateria: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        padding: 10,
        backgroundColor: "#FF4848",
    },

    professor: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#d6d6d6",
    },
});
