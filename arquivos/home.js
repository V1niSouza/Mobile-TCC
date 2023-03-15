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

       <Text style={styles.textoModal}>HOME</Text>
    </View>
          <View>

          <TouchableOpacity style={styles.opcao01}>
              <Text  style={{color: '#FFF'}}>CLIMA</Text>
            <TouchableOpacity>
          <Ionicons style={{marginLeft:'25%', marginTop:'8%'}} name="cloudy-outline" size={39} color="#FF0000x"> </Ionicons>
            </TouchableOpacity>
          </TouchableOpacity>  

         <TouchableOpacity style={styles.opcao02}>
             <Text style={{color: '#FFF'}}>NIVEL</Text>
            <TouchableOpacity>
          <Ionicons style={{marginLeft:'25%', marginTop:'8%'}} name="trending-up-outline" size={39} color="#FF0000x"> </Ionicons>
            </TouchableOpacity>
         </TouchableOpacity>

         <TouchableOpacity style={styles.opcao03}>
          <Text style={{color: '#FFF'}}>DENUNCIAS</Text>
            <TouchableOpacity>
          <Ionicons style={{marginLeft:'25%', marginTop:'8%'}} name="alert-circle-outline" size={39} color="#FF0000x"> </Ionicons>
            </TouchableOpacity>
          </TouchableOpacity>


          <TouchableOpacity style={styles.opcao04} onPress={{}}>
          <Text style={{color: '#FFF'}}>CHAT</Text>
            <TouchableOpacity>
          <Ionicons style={{marginLeft:'25%', marginTop:'8%'}} name="chatbox-ellipses-outline" size={39} color="#FF0000x"> </Ionicons>
            </TouchableOpacity>
          </TouchableOpacity>
            </View>
          </View>
  
      );
    }
  }
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      paddingTop: '0%',
      backgroundColor:'#DCDCDC'      
    },
    textoNome:{
    fontSize: 17,
    color: '#000000',
    fontWeight:'bold'
    },
    opcao01:{
      backgroundColor: '#36ad54fa',
      borderRadius: '10%',
      height: '30%',
      width: '30%',
      position: 'relative',
      left: '10%',
      top: '40%',
      color: '#00FF7F',
      alignItems:'center',
      justifyContent:'center',    
    },

  opcao02:{
    backgroundColor: '#36ad54fa',
    borderRadius: '10%',
    height: '30%',
    width: '30%',
    position: 'relative',
    left: '60%',
    top: '10%',
    color: '#FFF',
    alignItems:'center',
    justifyContent:'center',    
  },

opcao03:{
  backgroundColor: '#36ad54fa',
  borderRadius: '10%',
  height: '30%',
  width: '30%',
  position: 'relative',
  left: '10%',
  top: '40%',
  color: '#FFF',
  alignItems:'center',
  justifyContent:'center',     
},

opcao04:{
  backgroundColor: '#36ad54fa',
  borderRadius: '10%',
  height: '30%',
  width: '30%',
  position: 'relative',
  left: '60%',
  top: '10%',
  color: '#FFF',
  alignItems:'center',
  justifyContent:'center',     
},
    textoopcao01:{
      fontSize:16,
      color:'#FFF',
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
      position: 'absolute', 
      left: '18%',
      marginTop: '80%',
    },
    aviso02:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'absolute', 
      left: '18%',
      marginTop: '100%',
    },
    aviso03:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'absolute', 
      left: '18%',
      marginTop: '120%',
    },
    textoModal:{    
      color: '#363636',    
      left: '40%',
      position:'absolute',
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
  });


