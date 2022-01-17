import react from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Alunos from '../page-administrador/alunos';
import Funcionarios from '../page-administrador/funcionarios';
import Painel from '../page-administrador/painel';
import Salas from '../page-administrador/salas';


const Tab = createBottomTabNavigator();

export default function TelaAuloRotas(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Painel" component={Painel} options={{headerShown: false}}/>
            <Tab.Screen name="Funcionários" component={Funcionarios} options={{headerShown: false}}/>
            <Tab.Screen name="Salas" component={Salas} options={{headerShown: false}}/>
            <Tab.Screen name="Alunos" component={Alunos} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}
