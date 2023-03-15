import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert} from 'react-native';

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
            <Ionicons style={{marginLeft:5, marginRight:5}} name="md-arrow-back" size={25} color="#363636"> </Ionicons>
            </TouchableOpacity>
            <Text style={estilos.textoModal}> CADASTRO DO MORADOR </Text>
            <TouchableOpacity>
            <Ionicons style={{marginLeft:'10%', marginTop:'5%'}} name="person" size={22} color="#363636"> </Ionicons>
            </TouchableOpacity>
          </View>

              <Animatable.View animation="bounceInUp" useNativeDriver>
                <Text style={{fontSize:15, marginLeft: '35%'}}>Digite seu Email:</Text>
          <TextInput
              type="text"
              style={estilos.input}
              placeholder="Insira o seu Email"
              value={nome}
              onChangeText={(nome) => setNome(nome)}>
            </TextInput>
                <Text style={{fontSize:15, marginLeft: '30%'}}>Confirmação de Email:</Text>
            <TextInput
              type="text"
              style={estilos.input}
              placeholder="Insira o seu Email"
              value={email}
              onChangeText={(email) => setEmail(email)}>
            </TextInput>
            <Text style={{fontSize:15, marginLeft: '35%'}}>Crie uma Senha:</Text>
            <TextInput
              type="text"
              style={estilos.input}
              placeholder="Insira sua senha"
              value={senha}
              onChangeText={(senha) => setSenha(senha)}>
            </TextInput>
            <Text style={{fontSize:15, marginLeft: '35%'}}>Insira sua Rua:</Text>
            <TextInput
              secureTextEntry={false}
              style={estilos.input}
              placeholder="Insira o nome da sua rua"
              value={ruaend}
              onChangeText={(ruaend) => setRuaend(ruaend)}>
            </TextInput>
            <Text style={{fontSize:15, marginLeft: '35%'}}>Insira seu Bairro:</Text>
            <TextInput
              secureTextEntry={false}
              style={estilos.input}
              placeholder="Insira o nome do seu bairro"
              value={bairro}
              onChangeText={(bairro) => setBairro(bairro)}>
            </TextInput>
            <Text style={{fontSize:15, marginLeft: '25%'}}>Digite o nº da Residencia:</Text>
            <TextInput
              secureTextEntry={false}
              style={estilos.input}
              placeholder="Insira o numero da sua casa"
              value={casa}
              onChangeText={(casa) => setCasa(casa)}>
            </TextInput>

            <TouchableOpacity style={estilos.botaoModal} onPress={add}>
              <Text style={estilos.textoBotaoModal}> Finalizar Cadastro </Text> 
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
    backgroundColor: '#808080',
    borderRadius: 5,
    margin: 30,
    padding: 12,
    width: '50%',
    marginLeft: '25%',
    top: '6%',
    alignItems:'center',
    justifyContent:'center',    
  },
  textoBotaoModal:{
    fontSize:16,
    color:'#000',
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

});