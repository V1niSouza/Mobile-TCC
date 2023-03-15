import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';

import axios from 'axios'; 
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function App() {

  const mensagemDadosIncorretos = () => 

  Alert.alert(
    "Erro ao Logar",
    "Dados Incorretos!",
    [
      {text: "OK", onPress: () => setAbrirLogin(true)}
    ],
    {cancelable: true}
  );


  const api = 'http://192.168.1.73/apireact/';
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ruaend, setRuaend] = useState('');
  const [bairro, setBairro] = useState('');
  const [casa, setCasa] = useState('');
  const [id, setId] = useState('');
  const [abrirLogin,setAbrirLogin] = useState(true);


  useEffect(() => {
    listarDados();
  }, [] )

  async function listarDados(){
    const res= await axios.get(api + 'listar.php?busca=' + buscar);
    setLista(res.data.result);
  }

  async function add(){
    const obj={nome,email,senha,ruaend,bairro,casa,id};

    if(id >0)
    {
      const res= await axios.post(api + 'editar.php',obj);
    }
    else{
    const res= await axios.post(api + 'add.php',obj);

    if(res.data.sucess == true)
    {
      limparCampos();
    }
    if(res.data.sucess == 'Email já cadastrado!')
    {
      mensagemDuplicidade();
    }
  } 
    listarDados();
    setAbrir(false);
  }

  async function getItem(id)
  {
    const res= await axios.get(api + 'buscarId.php?id=' + id)
    setId(res.data.id);
    setNome(res.data.nome);
    setEmail(res.data.email);
    setSenha(res.data.senha);
    setRuaend(res.data.ruaend);
    setBairro(res.data.bairro);
    setCasa(res.data.casa);
    setAbrir(true);
  }

  async function deleteItem(id) 
  {
    const res= await axios.get(api + 'excluir.php?id=' + id);
    listarDados();
  } 

  function limparCampos(){
    setNome('');
    setEmail ('');
    setSenha('');
    setRuaend('');
    setBairro('');
    setCasa('');
    setId(0);
  }
   
  async function login(){
    const obj = {email,senha};
    const res = await axios.post(api + 'login.php' , obj);
     if(res.data.success == 'Dados Incorretos!')
     {
       mensagemDadosIncorretos();
     }
     else
     {
       setAbrirLogin(false);
     }
  }
   function buscarDados()
   {
      listarDados();  
   }
  

  return (
    <View>
        <Modal
      animationType="slide"
      transparent={false}
      visible={abrirLogin}
      >
 <SafeAreaView style={estilos.modal}>         

    <View style={estilos.modalHeader}>
    <TouchableOpacity onPress={() => setAbrir(false)}> 
            <Ionicons style={{marginLeft:5, marginRight:5}} name="md-arrow-back" size={25} color="#363636"> </Ionicons>
    </TouchableOpacity>

       <Text style={estilos.textoModal}>Faça seu Login</Text>
    </View>

<Animatable.View  
animation="bounceInUp"
useNativeDriver  >
       <TouchableOpacity style={{left:'5%', top:'15%', position: 'relative', width: '10%', height:'10%'}}>
       <Ionicons style={{}} name="mail" size={22} color="#363636"> </Ionicons>
       </TouchableOpacity>
<TextInput 
 type="email"
 style={estilos.input}
 placeholder="Insira seu Email"
 value={email}
 onChangeText={ (email) => setEmail(email)}>
  </TextInput>

      <TouchableOpacity style={{left:'5%', top:'15%', position: 'relative', width: '10%', height:'10%'}}>
       <Ionicons style={{}} name="lock-closed" size={22} color="#363636"> </Ionicons>
       </TouchableOpacity>
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
    </Animatable.View>
   </SafeAreaView>
  </Modal> 

  </View>
  );
}

const estilos = StyleSheet.create({
  modal:{
    flex: 1,
    backgroundColor:'#DCDCDC'    
  },

  textoModal:{    
    color: '#363636',    
    marginLeft: '15%',
    fontSize:25,      
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
    margin: '2.1%',
    marginLeft: '15%',
    top: '10%',
    padding: '2%',
    width: '70%',
    color: '#000',
    fontSize:13,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6
  },
  botaoModal:{
    backgroundColor: '#36ad54fa',
    borderRadius: 5,
    margin: 5,
    padding: 12,
    width: '40%',
    marginLeft: '30%',
    top: '100%',
    alignItems:'center',
    justifyContent:'center',    
  },
  textoBotaoModal:{
    fontSize:16,
    color:'#363636',
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

});