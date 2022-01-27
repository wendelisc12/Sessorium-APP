import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './src/screens/login';
import loginAdministrador from './src/screens/loginAdministrador';
import loginProfessor from './src/screens/loginProfessor';
import loginPais from './src/screens/loginPais';

import registrarEscola from './src/screens/registrarEscola';
import cadastrarProfessor from './src/page-administrador/cadastrarProfessor';
import telaAluno from './src/pages-aluno/telaAluno';
import TelaAlunoRotas from './src/screens/TelaAlunoRotas';
import painel from './src/page-administrador/painel'
import AlunoDetalhes from './src/page-administrador/alunoDetalhes';
import loginSeletivo from './src/screens/loginSeletivo';
import telaProfessor from './src/pages-professor/telaProfessor';
import professores from './src/page-administrador/professores';
import alunos from './src/page-administrador/alunos';
import adicionarAluno from './src/page-administrador/adicionarAluno'
import atividades from './src/pages-aluno/atividades';
import atividade from './src/pages-aluno/atividade';
import boletim from './src/pages-aluno/boletim';
import turmas from './src/page-administrador/turmas';
import professorDetalhes from './src/page-administrador/professorDetalhes';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="telaAlunoRotas" >
        <Stack.Screen name="login" component={login} options={{headerShown: false}}/>
        <Stack.Screen name="loginAdministrador" component={loginAdministrador} options={{headerShown: false}} />
        <Stack.Screen name="loginProfessor" component={loginProfessor} options={{headerShown: false}} />
        <Stack.Screen name="loginPais" component={loginPais} options={{headerShown: false}} />
        <Stack.Screen name="registrarEscola" component={registrarEscola} options={{headerShown: false}} />
        <Stack.Screen name="cadastrarProfessor" component={cadastrarProfessor} options={{headerShown: false}} />
        <Stack.Screen name="telaAluno" component={telaAluno} options={{headerShown: false}} />
        <Stack.Screen name="telaAlunoRotas" component={TelaAlunoRotas} options={{headerShown: false}} />
        <Stack.Screen name="painel" component={painel} options={{headerShown: false}} />
        <Stack.Screen name="alunoDetalhes" component={AlunoDetalhes} options={{headerShown: false}} />
        <Stack.Screen name="loginSeletivo" component={loginSeletivo} options={{headerShown: false}} />
        <Stack.Screen name="telaProfessor" component={telaProfessor} options={{headerShown: false}} />
        <Stack.Screen name="professores" component={professores} options={{headerShown: false}} />
        <Stack.Screen name="alunos" component={alunos} options={{headerShown: false}} />
        <Stack.Screen name="adicionarAluno" component={adicionarAluno} options={{headerShown: false}} />
        <Stack.Screen name="atividades" component={atividades} options={{headerShown: false}} />
        <Stack.Screen name="atividade" component={atividade} options={{title: ""}} />
        <Stack.Screen name="boletim" component={boletim} options={{headerShown: false}} />
        <Stack.Screen name="turmas" component={turmas} options={{headerShown: false}} />
        <Stack.Screen name="professorDetalhes" component={professorDetalhes} options={{title: ""}} />

      </Stack.Navigator> 
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
