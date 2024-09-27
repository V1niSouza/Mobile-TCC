import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView } from 'react-native';

import axios from 'axios'; 
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function App() {

  const mensagemDuplicidade = () => Alert.alert(
     "Erro ao salvar",
     "E-mail já cadastrado",
     [
       {text: "OK", onPress: () => setAbrir(true)}
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
  const [abrir, setAbrir] = useState(true);



  async function add(){
    const obj={nome,email,senha,ruaend,bairro,casa,id};

    if(id >0)
    {
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


  


  return (
    <View>
 
        <Modal
          animationType='slide'
          visible={abrir}
        > 
        <SafeAreaView style={estilos.modal}>
          <View style={estilos.modalHeader}>
            <TouchableOpacity
              onPress={() => setAbrir(false)} 
            > 
            <Ionicons style={{marginLeft:5, marginRight:5}} name="md-arrow-back" size={35} color="#FFF"> </Ionicons>
            </TouchableOpacity>
            <Text style={estilos.textoModal}> Cadastrar Morador </Text>
          </View>

              <Animatable.View animation="bounceInUp" useNativeDriver>
          <TextInput
              type="text"
              style={estilos.input}
              placeholder="Insira o seu Email"
              value={nome}
              onChangeText={(nome) => setNome(nome)}>
            </TextInput>

            <TextInput
              type="text"
              style={estilos.input}
              placeholder="Insira o seu Email"
              value={email}
              onChangeText={(email) => setEmail(email)}>
            </TextInput>

            <TextInput
              type="text"
              style={estilos.input}
              placeholder="Insira sua senha"
              value={senha}
              onChangeText={(senha) => setSenha(senha)}>
            </TextInput>

            <TextInput
              secureTextEntry={false}
              style={estilos.input}
              placeholder="Insira o nome da sua rua"
              value={ruaend}
              onChangeText={(ruaend) => setRuaend(ruaend)}>
            </TextInput>

            <TextInput
              secureTextEntry={false}
              style={estilos.input}
              placeholder="Insira o nome do seu bairro"
              value={bairro}
              onChangeText={(bairro) => setBairro(bairro)}>
            </TextInput>

            <TextInput
              secureTextEntry={false}
              style={estilos.input}
              placeholder="Insira o numero da sua casa"
              value={casa}
              onChangeText={(casa) => setCasa(casa)}>
            </TextInput>

            <TouchableOpacity style={estilos.botaoModal} onPress={add}>
              <Text style={estilos.textoBotaoModal}> Cadastrar </Text> 
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
    backgroundColor:'#b2b2b2'    
  },

  textoModal:{    
    color: '#000',    
    marginLeft: 15,
    fontSize:25,  
    left: '180%'    
  },

  modalHeader:{    
   marginLeft:10,
   marginTop:20,
   alignItems:'center',
   flexDirection:'row',
   marginBottom:30,    
  },

  input:{
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 15,
    padding: 8,
    width: '80%',
    left: '8%',
    top: '10%',
    color: '#000',
    fontSize:13
  },
  botaoModal:{
    backgroundColor: '#36ad54fa',
    borderRadius: 5,
    margin: 5,
    padding: 12,
    width: '60%',
    top: '17%',
    left: '18%',
    color: '#FFF',
    alignItems:'center',
    justifyContent:'center',    
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