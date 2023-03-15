import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert} from 'react-native';
import axios from 'axios'; 
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native';

export default function Cadastro(){
  const navigation = useNavigation(); 


  const mensagemDuplicidade = () => Alert.alert(
     "Erro ao Salvar",
     "E-mail já cadastrado",
     [
      {text: "OK", onPress: () => navigation.navigate('Cadastro')}
     ],
     {cancelable: true}
  );
 
  const api= 'http://10.68.36.70/apireact/';
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ruaend, setRuaend] = useState('');
  const [bairro, setBairro] = useState('');
  const [casa, setCasa] = useState('');
  const [abrir, setAbrir] = useState(true);
  const [id, setId] = useState('');



  async function add(){
    const obj={nome,email,senha,ruaend,bairro,casa};
    const res= await axios.post(api + 'add.php',obj);
       if(res.data.success == 'Email já cadastrado!')
    {
      mensagemDuplicidade();
    }
    else
    {
      navigation.navigate('Home');
      limparCampos();
    }
  
  }

  return (
    <View>
 
        <Modal
          animationType='slide'
          visible={abrir}
        > 
        <SafeAreaView style={estilos.modal}>
          <View style={estilos.modalHeader}>
            <TouchableOpacity   title='Escolha...' onPress={() => navigation.navigate('Escolha')}> 
            <Ionicons style={{marginLeft:5, marginRight:5}} name="md-arrow-back" size={25} color="#FFF"> </Ionicons>
            </TouchableOpacity>
            <Text style={estilos.textoModal}> CADASTRO DO MORADOR </Text>
            <TouchableOpacity>
            <Ionicons style={{position: 'relative', left:'350%', marginTop:'5%'}} name="person" size={22} color="#FFF"> </Ionicons>
            </TouchableOpacity>
          </View>

              <Animatable.View animation="bounceInUp" useNativeDriver>
                
              <Text style={{position: 'relative', left:'15%', top:'4%', fontSize:20, fontWeight: 'normal'}}>Digite seu Nome:</Text>
              <Ionicons style={{position: 'relative', left:'7%', top:'6%'}} name="person-circle-outline" size={30} color="#000000"> </Ionicons>
          <TextInput
              type="text"
              style={estilos.input}
              placeholder="Insira o seu Nome"
              value={nome}
              onChangeText={(nome) => setNome(nome)}>
            </TextInput>

              <Text style={{position: 'relative', left:'15%', top:'4%', fontSize:20, fontWeight: 'normal'}}>Digite seu Email:</Text>
              <Ionicons style={{position: 'relative', left:'7%', top:'6%'}} name="mail-outline" size={30} color="#000000"> </Ionicons>
            <TextInput
              type="text"
              style={estilos.input}
              placeholder="Insira o seu Email"
              value={email}
              onChangeText={(email) => setEmail(email)}>
            </TextInput>

              <Text style={{position: 'relative', left:'15%', top:'4%', fontSize:20, fontWeight: 'normal'}}>Crie sua Senha:</Text>
              <Ionicons style={{position: 'relative', left:'7%', top:'6%'}} name="lock-closed-outline" size={30} color="#000000"> </Ionicons>
            <TextInput
             secureTextEntry={true}
              type="text"
              style={estilos.input}
              placeholder="Insira sua senha"
              value={senha}
              onChangeText={(senha) => setSenha(senha)}>
            </TextInput>

              <Text style={{position: 'relative', left:'15%', top:'4%', fontSize:20, fontWeight: 'normal'}}>Insira sua Rua:</Text>
              <Ionicons style={{position: 'relative', left:'7%', top:'6%'}} name="location-outline" size={30} color="#000000"> </Ionicons>
            <TextInput
              secureTextEntry={false}
              style={estilos.input}
              placeholder="Insira o nome da sua rua"
              value={ruaend}
              onChangeText={(ruaend) => setRuaend(ruaend)}>
            </TextInput>

              <Text style={{position: 'relative', left:'15%', top:'4%', fontSize:20, fontWeight: 'normal'}}>Insira seu Bairro:</Text>
              <Ionicons style={{position: 'relative', left:'7%', top:'6%'}} name="location-outline" size={30} color="#000000"> </Ionicons>
           <TextInput
              secureTextEntry={false}
              style={estilos.input}
              placeholder="Insira o nome do seu bairro"
              value={bairro}
              onChangeText={(bairro) => setBairro(bairro)}>
            </TextInput>

              <Text style={{position: 'relative', left:'15%', top:'4%', fontSize:20, fontWeight: 'normal'}}>Insira o nº da sua Residência:</Text>
              <Ionicons style={{position: 'relative', left:'7%', top:'6%'}} name="location-outline" size={30} color="#000000"> </Ionicons>
            <TextInput
              secureTextEntry={false}
              style={estilos.input}
              placeholder="Insira o numero da sua casa"
              value={casa}
              onChangeText={(casa) => setCasa(casa)}>
            </TextInput>

            <TouchableOpacity style={estilos.botaoModal} onPress={add}>
              <Text style={estilos.botaoTexto}> Finalizar Cadastro </Text> 
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
    backgroundColor:'#BAD8C7'
  },

  textoModal:{    
    color: '#FFF',    
    position: 'relative',
    left: '250%',
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
    height: '6%',
    width: '75%', 
    position: 'relative',
    left: '13%',
    top: '12%',  
  },
  botaoTexto:{
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

});