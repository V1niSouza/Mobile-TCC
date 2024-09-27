import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import axios from 'axios'; 
import {Ionicons} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';

export default function Login(){
  const navigation = useNavigation(); 

  const mensagemDadosIncorretos = () => 

  Alert.alert(
    "Erro ao Logar",
    "Dados Incorretos!",
    [
      {text: "OK", onPress: () => navigation.navigate('Login')}
    ],
    {cancelable: true}
  );


  const api = 'http://10.68.36.70/apireact/';
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  

  async function login(){
    const obj = {email,senha};
    const res = await axios.post(api + 'login.php' , obj);
     if(res.data.success == 'Dados Incorretos!')
     {
       mensagemDadosIncorretos();
     }
     else
     {
      navigation.navigate('Home');
    }
  } 
      return(
    <View>
        <Modal>
 <SafeAreaView style={estilos.modal}>         

    <View style={estilos.modalHeader}>
    <TouchableOpacity  title='Escolha...' onPress={() => navigation.navigate('Escolha')} > 
            <Ionicons style={{marginLeft:5, marginRight:5}} name="md-arrow-back" size={25} color="#FFF"> </Ionicons>
    </TouchableOpacity>

       <Text style={estilos.textoModal}>Faça seu Login</Text>
       <TouchableOpacity>
       <Ionicons style={{position: 'relative', left:'300%', marginTop:'5%'}} name="person" size={22} color="#FFF"> </Ionicons>
       </TouchableOpacity>
    </View>

<View>
      <Text style={{position: 'relative', left:'15%', top:'8%', fontSize:20, fontWeight: 'normal'}}>Insira seu Email:</Text>
      <Ionicons style={{position: 'relative', left:'6%', top:'14%'}} name="mail-outline" size={30} color="#000000"> </Ionicons>
      <TextInput  type="email" style={estilos.input} placeholder="Insira seu Email" value={email} onChangeText={ (email) => setEmail(email)}></TextInput>

      <Text style={{position: 'relative', left:'15%', top:'8%', fontSize:20, fontWeight: 'normal'}}>Insira sua Senha:</Text>
      <Ionicons style={{position: 'relative', left:'6%', top:'14%'}} name="lock-closed-outline" size={30} color="#000000"> </Ionicons>
<TextInput 
 secureTextEntry={true}
 style={estilos.input}
 placeholder="Insira sua Senha"
 value={senha}
 onChangeText={ (senha) => setSenha(senha)}>
 </TextInput>

<TouchableOpacity  
      style={estilos.botaoModal}
      onPress={login}
      >
    <Text  style={estilos.textoBotaoModal}>ENTRAR</Text>
</TouchableOpacity>
    </View>
   </SafeAreaView>
  </Modal> 

  </View>
  );
}

const estilos = StyleSheet.create({
  modal:{
    flex: 1,
    backgroundColor:'#BAD8C7'
  },

  textoModal:{    
    color: '#FFF',    
    position: 'relative',
    left: '200%',
    fontSize:24,  
    fontWeight: 'bold',   
  },

  modalHeader:{    
    marginLeft: 0,
    marginTop: '0%',
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
  botaoModal:{
    backgroundColor: '#008037',
    borderRadius: 60,
    alignItems:'center',
    justifyContent:'center',   
    height: '10%',
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
  });