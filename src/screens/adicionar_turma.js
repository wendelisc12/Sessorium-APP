import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nome, setnome] = useState("")
  const [turno, setturno] = useState("")
  const [ano, setano] = useState("")
  const [semestre, setsemestre] = useState("")
  const [total_de_meses, settotal_de_meses] = useState("")

  return (
    <View style={styles.container}>
       <Text style={styles.Sessorium_logo}>Sessorium</Text>

       <Text style={styles.titulo}>Adicione uma Turma</Text>

       <Text style={styles.inputNome_text}>Nome:</Text>

        <TextInput style={styles.input}  placeholder='Digite o Nome'  placeholderTextColor={'gray'} value={nome} keyboardType='default' onChangeText={nome => setnome(nome)}></TextInput>
       

        <Text style={styles.inputTurno_text}>Turno:</Text>
       <TextInput style={styles.input} placeholder='Digite o Turno' placeholderTextColor={'gray'} value={turno} keyboardType='default'  onChangeText={turno => setturno(turno)}></TextInput>
         

        <Text style={styles.inputAno_text}>Ano:</Text>
        <TextInput style={styles.input} placeholder='Digite o Ano' placeholderTextColor={'gray'} value={ano} keyboardType='default' onChangeText={ano => setano(ano)}></TextInput>

        
        <Text style={styles.inputSemestre_text}>Semestre:</Text>
        <TextInput style={styles.input} placeholder='Digite o Semestre' placeholderTextColor={'gray'} value={semestre} keyboardType='default' onChangeText={semestre => setsemestre(semestre)}></TextInput>

        <TextInput style={styles.input}  placeholder='Nome'  placeholderTextColor={'gray'}  keyboardType='default' onChangeText={nome => setnome(nome)}></TextInput>
       

        <Text style={styles.inputTurno_text}>Turno:</Text>
       <TextInput style={styles.input} placeholder='Turno' placeholderTextColor={'gray'} keyboardType='default'  onChangeText={turno => setturno(turno)}></TextInput>
         

        <Text style={styles.inputAno_text}>Ano:</Text>
        <TextInput style={styles.input} placeholder='Ano' placeholderTextColor={'gray'} keyboardType='default' onChangeText={ano => setano(ano)}></TextInput>

        
        <Text style={styles.inputSemestre_text}>Semestre:</Text>
        <TextInput style={styles.input} placeholder='Semestre' placeholderTextColor={'gray'} keyboardType='default' onChangeText={semestre => setsemestre(semestre)}></TextInput>
        
        
        <View style={styles.total_meses}>
        <Text style={styles.inputMeses_text}>Total de meses:</Text>

        <TextInput style={styles.input} placeholder='Digite o total de meses' placeholderTextColor={'gray'} value={total_de_meses} keyboardType='default' onChangeText={total_de_meses => settotal_de_meses(total_de_meses)} ></TextInput>

        <TextInput style={styles.input} placeholder='total de meses' placeholderTextColor={'gray'}  keyboardType='default' onChangeText={total_de_meses => settotal_de_meses(total_de_meses)} ></TextInput>

        </View>
        

        <TouchableOpacity style={styles.botao_cadastrar}>
           <Text style={styles.cadastrar}>Cadastrar</Text>
        </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
    
  },
  Sessorium_logo: {
    marginTop: 50,
    marginBottom:30,
    fontSize: 20,
    marginRight: 250,
  },
  titulo: {
    marginBottom: 50,
    fontSize: 20
  },
  input: {
  width: '100%',
  height: 50,
  borderRadius: 10,
  marginBottom: 25,
  borderColor:'#000',
  backgroundColor:'#E8E8E8',
  paddingLeft: 10,
  marginHorizontal: 20
  
  
  },
  input_text: {
  marginBottom: 10

  },
  botao_cadastrar: {
    backgroundColor: '#00FF00',
    marginTop: 1,
    borderRadius:10,
    width: '40%',
    height: 50,
    marginTop: 30,
    borderColor:'#000',
  },
  cadastrar: {
    color: 'white',
    marginTop:12,
    marginLeft: 45,
  },
  total_meses: {
    width: '170%',
    marginLeft: '60%'

  },
  inputMeses_text: {
    marginLeft: 30

  },
  inputSemestre_text: {
    marginRight: 310

  },
  inputAno_text: {
    marginRight: 345
  },
  inputTurno_text: {
    marginRight: 345
  },
  inputNome_text: {
    marginRight: 345
  }


});