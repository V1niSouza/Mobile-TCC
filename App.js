import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/telas/home';
import Suporte from './src/telas/denuncia';
import Tempo from './src/telas/tempo';
import Cadastro from './src/telas/cadastro';
import Login from './src/telas/login';
import Escolha from './src/telas/escolha';
import Nivel from './src/telas/alerta'

const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        

      <Stack.Screen
          name="Escolha"
          component={Escolha}
          options={{
            title: 'Tela Escolha',
            headerStyle:{
              backgroundColor: '#12ed',
            },   
            headerShown: false   
          }}
        >
        </Stack.Screen> 

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Tela Home',
            headerStyle:{
             backgroundColor: '#12ed',
            },   
           headerShown: false   
             }}
        >
        </Stack.Screen>

        <Stack.Screen
          name="Suporte"
          component={Suporte}
          options={{
            title: 'Tela Suporte',
            headerStyle:{
              backgroundColor: '#12e356'
            },   
            headerShown: false       
          }}
        >
        </Stack.Screen>

        <Stack.Screen
          name="Tempo"
          component={Tempo}
          options={{
            title: 'Tela Tempo Local',
            headerStyle:{
              backgroundColor: '#12ed'
            },   
            headerShown: false      
          }}
        >
        </Stack.Screen>


        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title: 'Tela Cadastro',
            headerStyle:{
              backgroundColor: '#12ed'
            },   
            headerShown: false       
          }}
        >
        </Stack.Screen>


        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Tela Login',
            headerStyle:{
              backgroundColor: '#12ed'
            },   
            headerShown: false       
          }}
        >
        </Stack.Screen>

       <Stack.Screen
          name="Nivel"
          component={Nivel}
          options={{
            title: 'Tela Nivel',
            headerStyle:{
              backgroundColor: '#12ed',
            },   
            headerShown: false         
          }}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


