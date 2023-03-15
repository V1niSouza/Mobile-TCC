import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, ImageBackground} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import axios from 'axios';

  export default function Nivel(){
   
  const api= 'http://10.68.36.70/apireact/';
  const [lista,setLista] = useState([]);
  
  useEffect(() => {
    listarDados();
  },[lista])


  async function listarDados(){
    const res= await axios.get(api + 'listar.php');
    setLista(res.data.result);      

  }
    const navigation = useNavigation();
    return(
            < View style={styles.container}>
        <View style={styles.modalHeader}>
        <TouchableOpacity  title='Home...' onPress={() => navigation.navigate('Home')}> 
                <Ionicons style={{marginLeft:5, marginRight:5}} name="md-arrow-back" size={25} color="#FFF"> </Ionicons>
        </TouchableOpacity>
    
           <Text style={styles.textoModal}>ALERTA DE ALAGAMENTO</Text>
           <TouchableOpacity>
       <Ionicons style={{position: 'relative', left:'400%', marginTop:'7%'}} name="trending-up-outline" size={22} color="#FFF"> </Ionicons>
       </TouchableOpacity>
        </View>
        <View>
          <ScrollView style={{left: '30%', position:'relative', top: '3%'}}>
          <View style={styles.grid}>
            {lista.map(item => (
              <View style={styles.griditem} key={item.id}>
                {item.valor >= 47 ? (<Image source={require('../../../imgs/2.png')} style={{ width: '100%', height: 320, position: 'relative', top: '-10%', left: '-30%'  }} />): (<Image source={require('../../../imgs/3.png')} style={{ width: '100%', height: 320, position: 'relative', top: '-10%', left: '-30%'   }} />)}
              </View>

            ))}
          </View>
        </ScrollView>
        <ImageBackground source={require('../../../imgs/fund02.png')} style={{ width: '100%', height: 700, position: 'relative', top: '-1%', left: '-0%' }}>
          <TouchableOpacity style={{left:'19%', top:'20%', position: 'relative'}}>
          <Ionicons name="trending-up-outline" size={39} color="#00FF00"> </Ionicons>
          </TouchableOpacity>
          <Text style={styles.aviso01}>NORMAL</Text>

          <TouchableOpacity style={{left:'19%', top:'19%', position: 'relative'}}>
          <Ionicons name="trending-up-outline" size={39} color="#FFFF00"> </Ionicons>
          </TouchableOpacity>
          <Text style={styles.aviso02}>MÉDIO</Text>

          <TouchableOpacity style={{left:'19%', top:'20%', position: 'relative'}}>
          <Ionicons name="trending-up-outline" size={39} color="#FF0000"> </Ionicons>
          </TouchableOpacity>
          <Text style={styles.aviso03}>ACIMA DA MÉDIA</Text>

          <TouchableOpacity style={styles.emerge}>
              <Text style={styles.botaoTexto}>Chamada de emergência</Text>
              </TouchableOpacity>
              </ImageBackground>
            </View>
          </View>
  
      );
    }
  
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#BAD8C7' 
    },
    textoNome:{
    fontSize: 17,
    color: '#000000',
    fontWeight:'bold'
    },
    botao:{
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
      borderRadius: 150,
      margin: 20
    },
     botaoTexto:{
       fontSize: 20,
       fontWeight: 'bold',
       color: '#FFFFFF'
     },
     aviso01:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '-12%',
      top: '15%',
    },
    aviso02:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '-17%',
      top: '14%',
    },
    aviso03:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '-5%',
      top: '15%',
    },
    emerge:{
      height: '10%',
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      borderRadius: 10,
      position: 'relative',
      left: '19%',
      top: '43%',
     },

     textoModal:{    
      color: '#FFF',    
      position: 'relative',
      left: '400%',
      fontSize:24,  
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
    grid:{
      marginTop: 8,    
    },
    griditem:{
      padding: 11,
      borderBottomColor: '#dbdbdb',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    info:{
      fontSize: 20,
      position: 'relative',
      fontWeight: 'bold',
      top: '-27%',
      left: '-3%'
    },
    descs:{
    fontSize: 18,
    position: 'relative',
    fontWeight: 'bold',
    top: '10%',
    left: '-25%',
    color:'#B22222',
    textAlign:'center',
  },
  });


