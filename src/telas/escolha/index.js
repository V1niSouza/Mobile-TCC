import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation} from '@react-navigation/native';


export default function Escolha(){
    const navigation = useNavigation(); 
    return(
      < View style={styles.container}>
        <TouchableOpacity style={styles.img01} ><Image source={require('../../../imgs/logo.png')} style={styles.img0101} /></TouchableOpacity>
          <View>
            <TouchableOpacity  title='Cadastro...' onPress={() => navigation.navigate('Cadastro')} style={styles.botaore}>
             <Text style={styles.botaoTexto}>Cadastrar-se</Text>
             </TouchableOpacity>

              <TouchableOpacity  title='Login...' onPress={() => navigation.navigate('Login')} style={styles.botaolo}>
              <Text style={styles.botaoTexto}>Entrar</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.img02} ><Image source={require('../../../imgs/empresa.png')} style={styles.img0202} /></TouchableOpacity>
          </View>
  
      );
    }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#BAD8C7'
    },
    areaformulario:{
      flexDirection: 'column',
      margin: 10,
    },

    botaore:{
      backgroundColor: '#008037',
      borderRadius: 60,
      color: '#FFF',
      alignItems:'center',
      justifyContent:'center',   
      height: '15%',
      width: '75%',
      position: 'relative',
      left: '11%',
      top: '110%',
    },
    botaolo:{
      backgroundColor: '#008037',
      borderRadius: 60,
      color: '#FFF',
      alignItems:'center',
      justifyContent:'center',   
     height: '15%',
     width: '75%',
     position: 'relative',
     left: '11%',
     top: '130%',
     },
     botaoTexto:{
       fontSize: 20,
       fontWeight: 'bold',
       color: '#FFFFFF'
     },
     bancoLogogroup:{
       textAlign: 'center',
       fontSize: 30,
       fontWeight: 'bold',
       position: 'relative', 
       right: '10%',
       top: '20%',
     },
     img01: {
      position: 'relative', 
      left: '-20%',
      top: '15%',
      alignItems: 'center', 
      backgroundColor: '#BAD8C7', 
      height: 290, 
      width: 550,        
    },
    img0101: { 
      height: 350, 
      width: 600, 
      resizeMode: 'stretch', 
    },
    img02: {
      position: 'relative', 
      left: '2%',
      top: '42%',
      alignItems: 'center', 
      backgroundColor: '#BAD8C7', 
      height: 100, 
      width: 110,        
    },
    img0202: { 
      height: 50, 
      width: 110, 
      resizeMode: 'stretch', 
    },
  });
