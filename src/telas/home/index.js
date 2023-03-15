import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, ImageBackground} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import { useNavigation} from '@react-navigation/native';

import axios from 'axios';


export default function Home(){
 
  const api= 'http://10.68.36.70/apireact/';
  const [lista,setLista] = useState([]);
  //const ONE_SECOND_IN_MS = 100;
  
  useEffect(() => {
    listarDados();
  },[lista])


  async function listarDados(){
    const res= await axios.get(api + 'listar.php');
    setLista(res.data.result);     
  }

  const navigation = useNavigation(); 


    return(

    <View style={styles.container}>
    <View style={styles.modalHeader}>

       <Text style={styles.textoModal}>HOME</Text>
       <TouchableOpacity  title='Home...' onPress={() => navigation.navigate('Home')}></TouchableOpacity>
    </View>
          <View>
          <ScrollView>
          <View style={styles.grid}>
            {lista.map(item => (
              <View style={styles.griditem} key={item.id}>
                { item.valor >= 41 ? (<Image source={require('../../../imgs/2.png')} style={{ width: 500, height: 400, position: 'relative', top: '0%', left: '1%' }} />): (<Image source={require('../../../imgs/3.png')} style={{ width: '100%', height: 300, position: 'relative', top: '0%', left: '1%'  }} />)}
              </View>

            ))}
          </View>
        </ScrollView>
        
        <ImageBackground source={require('../../../imgs/fund01.png')} style={{ width: '100%', height: 500, position: 'relative', top: '4%', left: '-0%' }}>
          <TouchableOpacity title='Clima...' onPress={() => navigation.navigate('Tempo')} style={styles.opcao01}>
              <Text  style={styles.aviso01}>CLIMA LOCAL</Text>
              <TouchableOpacity style={{backgroundColor: '#8FBC8F', position: 'relative', left: '-38%', top: '-20%', borderRadius: 60, height: '100%', width: '25%'}}>
          <Ionicons style={{left: '30%', position:'relative', top: '20%'}} name="cloudy-outline" size={39}> </Ionicons>
          </TouchableOpacity>  
          </TouchableOpacity>

         <TouchableOpacity title='Nivel...' onPress={() => navigation.navigate('Nivel')} style={styles.opcao02}>
         <Text style={styles.aviso01}>NIVEL</Text>
         <TouchableOpacity style={{backgroundColor: '#8FBC8F', position: 'relative', left: '-38%', top: '-20%', borderRadius: 60, height: '100%', width: '25%'}}>      
         <Ionicons style={{left: '30%', position:'relative', top: '20%'}} name="trending-up-outline" size={39}> </Ionicons>
         </TouchableOpacity>
          </TouchableOpacity>

         <TouchableOpacity title='Denuncias...' onPress={() => navigation.navigate('Suporte')} style={styles.opcao03}>
          <Text style={styles.aviso01}>SUPORTE</Text>
          <TouchableOpacity style={{backgroundColor: '#8FBC8F', position: 'relative', left: '-38%', top: '-20%', borderRadius: 60, height: '100%', width: '25%'}}>
          <Ionicons style={{left: '30%', position:'relative', top: '20%'}} name="alert-circle-outline" size={39}> </Ionicons>
          </TouchableOpacity>
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

    opcao01:{
      backgroundColor: '#008037',
      borderRadius: 60,
      alignItems:'center',
      justifyContent:'center',   
      height: '12%',
      width: '80%', 
      position: 'relative',
      left: '12%',
      top: '13%',
      color: '#FFF'     
    },

   opcao02:{
    backgroundColor: '#008037',
    borderRadius: 60,
    alignItems:'center',
    justifyContent:'center',   
    height: '12%',
    width: '80%', 
    position: 'relative',
    left: '12%',
    top: '18%',    
   },

opcao03:{
  backgroundColor: '#008037',
  borderRadius: 60,
  alignItems:'center',
  justifyContent:'center',   
  height: '12%',
  width: '80%', 
  position: 'relative',
  left: '12%',
  top: '23%',   
},

    textoopcao01:{
      fontSize:16,
      color: '#FFF' 
    },
     bancoLogo:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'absolute', 
      left: '45%',
      marginTop: '20%',
    },
    aviso01:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative',
      top: '50%',
      left: '5%',
      color: '#FFF' 
    },
    textoModal:{    
    color: '#FFF',    
    position: 'relative',
    left: '780%',
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
      marginTop: 0, 

    },
    griditem:{
      padding: 13,
      borderBottomColor: '#dbdbdb',
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
  info:{
    fontSize: 20,
    position: 'relative',
    fontWeight: 'bold',
    top: '10%',
    left: '23%'
  },
  descs:{
  fontSize: 18,
  position: 'relative',
  fontWeight: 'bold',
  top: '10%',
  left: '-5%',
  color:'#B22222',
  textAlign:'center',
},
});


