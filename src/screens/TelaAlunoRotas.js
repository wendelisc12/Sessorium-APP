import react from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import telaAluno from '../pages-aluno/telaAluno';
import Boletim from '../pages-aluno/boletim';
import Calendario from '../pages-aluno/calendario';
import Chat from '../pages-aluno/chat';
import Perfil from '../pages-aluno/perfil';

const Tab = createBottomTabNavigator();

export default function TelaAuloRotas(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={telaAluno} options={{headerShown: false}}/>
            <Tab.Screen name="Boletim" component={Boletim} options={{headerShown: false}}/>
            <Tab.Screen name="Calendario" component={Calendario} options={{headerShown: false}}/>
            <Tab.Screen name="Chat" component={Chat} options={{headerShown: false}}/>
            <Tab.Screen name="Perfil" component={Perfil} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}
