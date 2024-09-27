import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import axios from 'axios';
  export default function Nivel(){
   
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
    
           <Text style={styles.textoModal}>ALERTA DE ALAGAMENTO</Text>
           <TouchableOpacity>
       <Ionicons style={{position: 'relative', left:'350%', marginTop:'7%'}} name="trending-up-outline" size={22} color="#FFF"> </Ionicons>
       </TouchableOpacity>
        </View>
        <View>
          <ScrollView style={{left: '30%', position:'relative', top: '15%'}}>
          <View style={styles.grid}>
            {lista.map(item => (
              <View 
                style={styles.griditem}
                key={item.id}             
              >
            <Text style={styles.info}>
                  ID: {item.id} -- Valor Nível Agua: {item.valor} 
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
          <TouchableOpacity style={{left:'20%', top:'45%', position: 'relative'}}>
          <Ionicons name="trending-up-outline" size={39} color="#FFFF00"> </Ionicons>
          </TouchableOpacity>
          <Text style={styles.aviso01}>NORMAL</Text>

          <TouchableOpacity style={{left:'20%', top:'50%', position: 'relative'}}>
          <Ionicons name="trending-up-outline" size={39} color="#FF8C00"> </Ionicons>
          </TouchableOpacity>
          <Text style={styles.aviso02}>MÉDIO</Text>

          <TouchableOpacity style={{left:'20%', top:'55%', position: 'relative'}}>
          <Ionicons name="trending-up-outline" size={39} color="#FF0000"> </Ionicons>
          </TouchableOpacity>
          <Text style={styles.aviso03}>ACIMA DA MÉDIA</Text>

          <TouchableOpacity style={styles.emerge}>
              <Text style={styles.botaoTexto}>Chamada de emergência</Text>
              </TouchableOpacity>
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
      left: '-10%',
      top: '40%',
    },
    aviso02:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '-10%',
      top: '45%',
    },
    aviso03:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '-7%',
      top: '50%',
    },
    emerge:{
      height: '5%',
      width: '70%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      borderRadius: 10,
      left: '14%',
      marginTop: '90%',
     },

     textoModal:{    
      color: '#FFF',    
      position: 'relative',
      left: '320%',
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


