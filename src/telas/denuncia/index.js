import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Modal, ImageBackground} from 'react-native';
import axios from 'axios'; 
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native';

export default function Denuncia(){
    const navigation = useNavigation();


const api= 'http://10.68.36.70/apireact/';
const [descr, setDesc] = useState('');
const [email, setEmail] = useState('');
const [id, setId] = useState('');


async function add(){
  const obj={email,descr};

 
     const res= await axios.post(api + 'add02.php',obj);
  if(res.data.success == true)
  {
    navigation.navigate('Suporte');
  }
}

  return (
    <View style={estilos.container}>
        <SafeAreaView style={estilos.modal}>
        <View style={estilos.modalHeader}>
        <TouchableOpacity  title='Home...' onPress={() => navigation.navigate('Home')}>  
            <Ionicons style={{marginLeft:5, marginRight:5}} name="md-arrow-back" size={25} color="#FFF"> </Ionicons>
            </TouchableOpacity>
            <Text style={estilos.textoModal}> SUPORTE </Text>
            <TouchableOpacity>
            <Ionicons style={{position: 'relative', left: '490%', marginTop:'15%'}} name="information-circle-outline" size={22} color="#FFF"> </Ionicons>
            </TouchableOpacity>
          </View>
          <ImageBackground source={require('../../../imgs/fund03.png')} style={{ width: '100%', height: 700, position: 'relative', top: '9%', left: '-0%' }}>
              <Animatable.View animation="bounceInUp" useNativeDriver>
              <Text style={{position: 'relative', left:'15%', top:'7%', fontSize:20, fontWeight: 'normal'}}>Digite seu Email:</Text>
              <Ionicons style={{position: 'relative', left:'6%', top:'12%'}} name="mail-outline" size={30} color="#000000"> </Ionicons>
              <TextInput
              type="email"
              style={estilos.input}
              placeholder="Insira o seu Email"
              value={email}
              onChangeText={(email) => setEmail(email)}>
            </TextInput>
            <Text style={{position: 'relative', left:'15%', top:'7%', fontSize:20, fontWeight: 'normal'}}>Digite o motivo do contato:</Text>
            <Ionicons style={{position: 'relative', left:'6%', top:'12%'}} name="megaphone-outline" size={30} color="#000000"> </Ionicons>
            <TextInput
              type="text"
              style={estilos.input2}
              placeholder="Descreva sua Info"
              value={descr}
              onChangeText={(descr) => setDesc(descr)}>
            </TextInput>

            <TouchableOpacity style={estilos.botaoModal} onPress={add}>
              <Text style={estilos.textoBotaoModal}> Enviar </Text> 
            </TouchableOpacity>
            </Animatable.View>
            </ImageBackground>
        </SafeAreaView>
  </View>
  );
}
  const estilos = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#BAD8C7' 
    },  
    textoModal:{    
      color: '#FFF',    
      position: 'relative',
      left: '490%',
      fontSize:26,  
      fontWeight: 'bold', 
      },
    
    modalHeader:{    
      marginLeft: 1,
      marginTop: '6%',
      padding: '3%',
      alignItems:'center',
      flexDirection:'row',
      marginBottom:30,  
      color: '#00FF7F',
      backgroundColor: '#008037',
      borderRadius: 10
    },
  
    input:{
      backgroundColor: '#FFF',
      borderRadius: 5,
      margin: '2%',
      marginLeft: 76,
      padding: '2%',
      width: '70%',
      color: '#000',
      fontSize:13,
      borderWidth: 1.4,
      borderColor: "#20232a",
    }, 
    input2:{
      backgroundColor: '#FFF',
      borderRadius: 5,
      margin: '2%',
      marginLeft: 76,
      padding: '10%',
      width: '70%',
      color: '#000',
      fontSize:13,
      borderWidth: 1.4,
      borderColor: "#20232a",
    },

    botaoModal:{
      backgroundColor: '#008037',
      borderRadius: 60,
      alignItems:'center',
      justifyContent:'center',   
      height: '15%',
      width: '75%', 
      position: 'relative',
      left: '13%',
      top: '12%',   
    },
    textoBotaoModal:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF'
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
  