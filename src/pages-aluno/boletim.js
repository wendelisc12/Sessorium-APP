import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Appbar } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function Boletim() {
    return (
        <View style={{ flex: 1 }}>
<<<<<<< HEAD
            <View style={styles.logoContainer}>
                <Image
                    style={{ width: 160, height: 40, marginHorizontal: 'auto'}}
                    source={require("../images/logo.png")}
                />
            </View>
            <ScrollView style={styles.principalContainer}>
                <Text style={{margin: 15, fontSize: 23, fontWeight: '600'}}>Notas:</Text>

                <View style={styles.notaMateriaContainer}>
                    <View style={{padding: 10, backgroundColor: '#FF4848', borderTopLeftRadius: 5, borderTopRightRadius: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{fontSize: 25, fontWeight: '600', color: '#fff'}}>História</Text>
                        <Image
                            style={{width: 30, height: 30,}}
                            source={require('../images/icon-seta-baixo.svg')}
                        />
                    </View>

                    <View style={styles.notas}>
                        <View style={{ borderBottomColor: '#cccc', borderBottomWidth: 1, }}>
                            <View style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.unidade}>Unidade</Text>
                                <Text style={styles.nota}>Nota</Text>
                            </View>
                            <View style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.unidade}>1</Text>
                                <Text style={styles.nota}>10.0</Text>
                            </View>
                        </View>
                        
                    </View>
                </View>
=======
            
            <ScrollView>
                

>>>>>>> bde6f10dc2799ed455566b630393ef8912ee9334
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EFEFEF",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
    },

    principalContainer: {
        backgroundColor: "white",
        width: "100%",
        bottom: 3,
        padding: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    logoContainer: {
        height: 100,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        justifyContent: 'center',
    },

    notaMateriaContainer:{
        borderRadius: 5,
    },

    unidade:{
        width:80,
        borderWidth: 1,
        borderColor: '#d4d4d4',
        fontWeight:"600", display: 'flex', justifyContent: 'center', alignItems:"center",
    },

    nota:{
        padding: 10, flex: 1, textAlign: 'center',  fontWeight:"600",
        borderWidth: 1,
        borderColor: '#d4d4d4',
    },

});
