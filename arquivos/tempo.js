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

       <Text style={styles.textoModal}>PREVISÃO DO TEMPO</Text>
    </View>
        
          <View>
          <TouchableOpacity style={{left:'20%', top:'70%', position: 'relative'}}>
          <Ionicons name="cloudy-outline" size={39} color="#FFF000"> </Ionicons>
          </TouchableOpacity>
          <Text style={styles.aviso01}>NORMAL</Text>

          <TouchableOpacity style={{left:'20%', top:'80%', position: 'relative'}}>
          <Ionicons name="cloudy-outline" size={39} color="#FF8C00"> </Ionicons>
          </TouchableOpacity>
          <Text style={styles.aviso02}>MÉDIO</Text>

          <TouchableOpacity style={{left:'20%', top:'90%', position: 'relative'}}>
          <Ionicons name="cloudy-outline" size={39} color="#FF0000"> </Ionicons>
          </TouchableOpacity>
          <Text style={styles.aviso03}>ACIMA DA MÉDIA</Text>

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
     aviso01:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '2%',
      top: '55%',
    },
    aviso02:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '2%',
      top: '65%',
    },
    aviso03:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '10%',
      top: '75%',
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
      borderRadius: 10   
    },
  });


