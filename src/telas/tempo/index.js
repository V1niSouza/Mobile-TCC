import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import { useNavigation} from '@react-navigation/native';
import axios from 'axios';
export default function Tempo(){

  const api= 'http://10.68.36.70/apireact/';
  const [lista,setLista] = useState([]);
  
  useEffect(() => {
    listarDados();
  },[])


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

       <Text style={styles.textoModal}>PREVISÃO DO TEMPO</Text>
       <TouchableOpacity>
       <Ionicons style={{position: 'relative', left:'350%', marginTop:'7%'}} name="rainy-outline" size={22} color="#FFF"> </Ionicons>
       </TouchableOpacity>
    </View>
        
          <View>
          <ScrollView style={{left: '30%', position:'relative', top: '15%'}} >
          <View style={styles.grid}>
            {lista.map(item => (
              <View 
                style={styles.griditem}
                key={item.id}             
              >
                <Text style={styles.info}>
                  ID: {item.id} -- Valor Nível Agua: {item.nivel} 
                </Text>
                <Text style={styles.descs}>
                  Nivel Abaixo de 60 - Normal 
                </Text>
                <Text style={styles.descs}>
                  Nivel Acima de 60 - Situação Critica 
                </Text>
              </View>

            ))}
          </View>
        </ScrollView>

          <TouchableOpacity style={{left:'20%', top:'150%', position: 'relative'}}>
          <Ionicons name="cloudy-outline" size={39} color="#FFF000"> </Ionicons>
          </TouchableOpacity>
          <Text style={styles.aviso01}>NORMAL</Text>

          <TouchableOpacity style={{left:'20%', top:'160%', position: 'relative'}}>
          <Ionicons name="rainy-outline" size={39} color="#FF8C00"> </Ionicons>
          </TouchableOpacity>
          <Text style={styles.aviso02}>MÉDIO</Text>

          <TouchableOpacity style={{left:'20%', top:'170%', position: 'relative'}}>
          <Ionicons name="thunderstorm-outline" size={39} color="#FF0000"> </Ionicons>
          </TouchableOpacity>
          <Text style={styles.aviso03}>ACIMA DA MÉDIA</Text>

            </View>

          </View>
  
      );
    }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#BAD8C7' 
    },
     aviso01:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '-10%',
      top: '138%',
    },
    aviso02:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '-10%',
      top: '148%',
    },
    aviso03:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '-7%',
      top: '158%',
    },
    textoModal:{    
      color: '#FFF',    
      position: 'relative',
      left: '350%',
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
      top: '10%',
      left: '-3%'
    },
    descs:{
    fontSize: 18,
    position: 'relative',
    fontWeight: 'bold',
    top: '10%',
    left: '-27%',
    color:'#B22222',
    textAlign:'center',
  },
  });


