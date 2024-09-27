import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class App extends Component {


  render(){
    return(
            < View style={styles.container}>
        
        <View style={styles.modalHeader}>
        <TouchableOpacity onPress={{}}> 
                <Ionicons style={{marginLeft:5, marginRight:5}} name="md-arrow-back" size={25} color="#363636"> </Ionicons>
        </TouchableOpacity>
    
           <Text style={styles.textoModal}>ALERTA DE ALAGAMENTO</Text>
        </View>
          <View>
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
  }
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#DCDCDC'      
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
      left: '2%',
      top: '37%',
    },
    aviso02:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '2%',
      top: '43%',
    },
    aviso03:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '10%',
      top: '47%',
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
      color: '#363636',    
      marginLeft: '15%',
      fontSize:20,      
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
    },
  });


