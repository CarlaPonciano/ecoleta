import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Points from './pages/Points'
import Detail from './pages/Detail'

//criação do roteamento
const AppStack = createStackNavigator()

const Routes = () => {
    //NavigationContainer: definição do comportamento das rotas
    //Screen: utilizado para cada tela
    //headerMode: remove o header da tela
    //coloca um background que será aplicado em todas as telas
    return (
        <NavigationContainer>
            <AppStack.Navigator 
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#f0f0f5'
                    }
                }}
            >
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Points" component={Points} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes