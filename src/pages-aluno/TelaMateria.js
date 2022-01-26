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

export default function TelaMateria() {
    return (
        <View style={{ flex: 1 }}>
            <View style={
            {
                height: 150,
                backgroundColor:'#FF4848',
                display: 'flex',
                justifyContent: 'flex-end',
                padding: 10
            }
            }>
                <Text style={{color: '#fff', fontSize: 40, fontWeight:'600'}}>História</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        
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

});
