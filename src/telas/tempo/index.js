import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, ImageBackground} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import { useNavigation} from '@react-navigation/native';
import axios from 'axios';
export default function Tempo(){
 
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

       <Text style={styles.textoModal}>PREVISÃO DO TEMPO</Text>
       <TouchableOpacity>
       <Ionicons style={{position: 'relative', left:'450%', marginTop:'7%'}} name="rainy-outline" size={22} color="#FFF"> </Ionicons>
       </TouchableOpacity>
    </View>
        
          <View>
          <ScrollView style={{left: '10%', position:'relative', top: '3%'}}>
          <View style={styles.grid}>
            {lista.map(item => (
              <View style={styles.griditem} key={item.id}>
                {item.nivel >= 167 ? (<Image source={require('../../../imgs/alertadachuvinha/1.png')} style={{ width: '100%', height: 300, position: 'relative', top: '0%', left: '-20%'  }} />) : (<Image source={require('../../../imgs/alertadachuvinha/3.png')} style={{ width: '100%', height: 305, position: 'relative', top: '0%', left: '-20%'  }} />)}
              </View>

            ))}
          </View>
        </ScrollView>
        <ImageBackground source={require('../../../imgs/fund.png')} style={{ width: '100%', height: 700, position: 'relative', top: '0%', left: '-0%' }}>
          <TouchableOpacity style={{left:'27%', top:'26%', position: 'relative'}}>
          <Ionicons name="cloudy-outline" size={39} color="#FFF"> </Ionicons>
          </TouchableOpacity>
          <Text style={styles.aviso01}>NORMAL</Text>

          <TouchableOpacity style={{left:'27%', top:'31%', position: 'relative'}}>
          <Ionicons name="rainy-outline" size={39} color="#FF8C00"> </Ionicons>
          </TouchableOpacity>
          <Text style={styles.aviso02}>MÉDIO</Text>

          <TouchableOpacity style={{left:'28%', top:'36%', position: 'relative'}}>
          <Ionicons name="thunderstorm-outline" size={39} color="#FF0000"> </Ionicons>
          </TouchableOpacity>
          <Text style={styles.aviso03}>ACIMA DA MÉDIA</Text>
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
     aviso01:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '-4%',
      top: '22%',
    },
    aviso02:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '-8%',
      top: '26%',
    },
    aviso03:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative', 
      left: '2%',
      top: '31%',
    },
    textoModal:{    
      color: '#FFF',    
      position: 'relative',
      left: '360%',
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
      padding: 15,
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


