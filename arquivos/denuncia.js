import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default class App extends Component {
  render(){
  return (
    <View style={estilos.container}>
 
        <SafeAreaView style={estilos.modal}>
        <View style={estilos.modalHeader}>
            <TouchableOpacity
              onPress={() => setAbrir(false)} 
            > 
            <Ionicons style={{marginLeft:5, marginRight:5}} name="md-arrow-back" size={25} color="#363636"> </Ionicons>
            </TouchableOpacity>
            <Text style={estilos.textoModal}> DENUNCIAS </Text>
            <TouchableOpacity>
            <Ionicons style={{marginLeft:'10%', marginTop:'5%'}} name="person" size={22} color="#363636"> </Ionicons>
            </TouchableOpacity>
          </View>

              <Animatable.View animation="bounceInUp" useNativeDriver>
              <Text style={{fontSize:15, marginLeft: '35%'}}>Digite seu Email:</Text>
          <TextInput
              type="text"
              style={estilos.input}
              placeholder="Insira o seu Email">
            </TextInput>
            <Text style={{fontSize:15, marginLeft: '35%'}}>Digite o Endereço:</Text>
            <TextInput
              secureTextEntry={false}
              style={estilos.input}
              placeholder="Insira a rua do ocorrido">
            </TextInput>
            <Text style={{fontSize:15, marginLeft: '25%'}}>Digite o motivo da denuncia:</Text>
            <TextInput
              secureTextEntry={false}
              style={estilos.input2}
              placeholder="Insira o motivo da denúncia">
            </TextInput>

            <TouchableOpacity style={estilos.botaoModal}>
              <Text style={estilos.textoBotaoModal}> Enviar </Text> 
            </TouchableOpacity>
            </Animatable.View>
        </SafeAreaView>
       
  </View>
  );
}
}
  const estilos = StyleSheet.create({
    container:{
      flex: 1,
      paddingTop:  '0%',
    
    },
    modal:{
      flex: 1,
      backgroundColor:'#D3D3D3'    
    },
  
    textoModal:{    
      color: '#363636',    
      marginLeft: '2%',
      fontSize:20,  
      top: '10%',
      borderWidth: '5%'   
    },
  
    modalHeader:{    
     marginLeft:'%0',
     marginTop: '0%',
     padding: '3%',
     alignItems:'center',
     flexDirection:'row',
     marginBottom:30,  
     color: '#00FF7F',
     backgroundColor:'#36ad54fa',
     borderRadius: 10
    },
  
    input:{
      backgroundColor: '#FFF',
      borderRadius: 5,
      margin: '2%',
      padding: '2%',
      width: '80%',
      marginLeft: '10%',
      color: '#000',
      fontSize:13
    },

      
    input2:{
      backgroundColor: '#FFF',
      borderRadius: 5,
      margin: '2%',
      padding: '10%',
      width: '80%',
      marginLeft: '10%',
      color: '#000',
      fontSize:13
    },

    botaoModal:{
      backgroundColor: '#36ad54fa',
      borderRadius: 5,
      margin: 5,
      padding: '3%',
      width: '60%',
      color: '#FFF',
      alignItems:'center',
      justifyContent:'center', 
      marginLeft: '20%',   
    },
    textoBotaoModal:{
      fontSize:16,
      color:'#FFF',
    },
    navbar:{
      backgroundColor: '#00335c',
      padding: 12,
      color: '#FFF',
      flexDirection:'row',
      marginTop: 35,
    },
    textonavbar:{
      fontSize:20,
      color:'#FFF',
      marginTop: 4,
      marginBottom: 2,
    },
    botao:{
      position: 'absolute', 
      right: 13,
      marginTop: 11,
    },
    grid:{
      marginTop: 8,    
    },
    griditem:{
      padding: 11,
      borderBottomColor: "#dbdbdb",
      borderBottomWidth: StyleSheet.hairlineWidth
    },
  
    gridbotaoEditar:{
      position: 'absolute',
      right:40,
      color:'#5c7ef6',
    },
  
    gridbotaoExcluir:{
      position: 'absolute',
      right:15,
      color:'#cc1414',
    },
  
    inputBuscar:{
      backgroundColor: '#FFF',
      borderRadius: 5,
      margin: 8,
      padding: 8,
      color: '#000',
      fontSize:15,
      borderBottomColor: "#767676",
      borderBottomWidth: StyleSheet.hairlineWidth,
      width:'100%',
      position:'relative',    
    },
  
    ViewinputBuscar:{
      flexDirection:'row',
    },
  
    iconeBuscar:{
     position:'absolute',
     right:20,
     top: 15,
    },
  });
  