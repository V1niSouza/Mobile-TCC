import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class App extends Component {
  render(){
    return(
      < View style={styles.container}>
        <Text style={styles.bancoLogogroup}>YOUNG TEC's</Text>
        <Text style={styles.bancoLogo}>ALERT ZONE's</Text>
          <View>
            <TouchableOpacity style={styles.botaore}>
             <Text style={styles.botaoTexto}>Registre-se</Text>
             </TouchableOpacity>

              <TouchableOpacity style={styles.botaolo}>
              <Text style={styles.botaoTexto}>Login</Text>
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
    areaformulario:{
      flexDirection: 'column',
      margin: 10,
    },

    botaore:{
     height: '80%',
     width: '35%',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#000000',
     borderRadius: 30,
     position: 'relative', 
     left: '10%',
     top: '900%',
    },
    botaolo:{
      height: '80%',
      width: '35%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
      borderRadius: 30,
      position: 'relative', 
      left: '60%',
      top: '820%',
     },
     botaoTexto:{
       fontSize: 20,
       fontWeight: 'bold',
       color: '#FFFFFF'
     },
     bancoLogogroup:{
       textAlign: 'center',
       fontSize: '100%',
       fontWeight: 'bold',
       position: 'relative', 
       right: '10%',
       top: '20%',
     },
     bancoLogo:{
      textAlign: 'center',
      fontSize: '160%',
      fontWeight: 'bold',
      position: 'relative', 
      left: '5%',
      top: '22%',
    },
  });
