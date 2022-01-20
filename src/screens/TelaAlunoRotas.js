import react from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import telaAluno from '../pages-aluno/telaAluno';
import Boletim from '../pages-aluno/boletim';
import Chat from '../pages-aluno/chat';
import Perfil from '../pages-aluno/perfil';

import {Entypo, Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();


export default function TelaAlunoRotas(){
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
           
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'rgb(216, 216, 216)',

            tabBarStyle:{paddingBottom: 5, paddingTop: 5, backgroundColor: '#32E535'}
          })}>

            <Tab.Screen 
            name="Inicio" 
            component={telaAluno}
            options={{headerShown: false}, {tabBarIcon: ({ size, color }) => (
                <Entypo name="home" size={size} color={color} />
            )}}
             />

            <Tab.Screen 
            name="Boletim" 
            component={Boletim}
            options={{headerShown: false}, {tabBarIcon: ({ size, color }) => (
                <Entypo name="book" size={size} color={color} />
            )}}
             />
            <Tab.Screen 
            name="Chat" 
            component={Chat}
            options={{headerShown: false}, {tabBarIcon: ({ size, color }) => (
                <Entypo name="chat" size={size} color={color} />
            )}}
             />
            <Tab.Screen 
            name="perfil" 
            component={Perfil}
            options={{headerShown: false}, {tabBarIcon: ({ size, color }) => (
                <Entypo name="user" size={size} color={color} />
            )}} 
             />

        </Tab.Navigator>
    )
}
