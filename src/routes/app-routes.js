import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import {inicial} from '../screens/inicial'
import {calendario} from '../pages-aluno/calendario'
import {boletim} from '../pages-aluno/boletim'


const {Navigator, Screen } = createBottomTabNavigator();

export function appRoutes(){
    return(
        <NavigationContainer>
            <Navigator>
                <Screen name='Inicio' component={inicial}/>
                <Screen name='Calendário' component={calendario}/>
                <Screen name='Boletim' component={boletim}/>
            </Navigator>
        </NavigationContainer>
    )
}