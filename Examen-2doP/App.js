import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import{Encabezado} from './componentes/Encabezado';
import {TarjetaActividad} from './componentes/TarjetaActividad';
import { FlatList } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [lista, setLista] = useState([]);

  return (
    <View style={styles.container}>
     <View style={styles.contenedor} >

      <Text style={styles.titulo}>Mi dia universitario</Text>
      </View>
      <Encabezado/>
      
      {/*<TarjetaActividad nombre="Matematicas" descripcion="Clase de Calculo Multivariable"/>
      <TarjetaActividad nombre="Fisica" descripcion="Clase de Vibraciones"/>
      <TarjetaActividad nombre="Quimica" descripcion="Clase de Quimica Organica"/> */}
      
      
      <FlatList
    data = {datosflat}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
    <TarjetaActividad style={styles.tarjestas}nombre={item.nombre}descripcion={item.descripcion}/>
    )}
    ></FlatList>


 




    </View>

   





  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  encabezado:{
    textAlign: 'center',
    fontweight: 'bold',
    textSize: 24,
    fontFamily: 'Arial',
    padding: 20,
  }
  ,
  contenedor: {
    backgroundColor: '#1783c6',
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});