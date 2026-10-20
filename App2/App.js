
/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo.js';
import { Saludo2 } from './components/Saludo2.js'
import { Perfil } from './components/Perfil.js'


/* 2. Zona render o Main

Codigo de la pratica 6:


<Text>Hola Mundo React Native!</Text>


      <Image source={require('./assets/wave.png')} />
       
    <Text>____________________________________________</Text>


    <Saludo></Saludo>
    <Saludo/>

    <Text>____________________________________________</Text>

    <Saludo2/>
      <StatusBar style="auto" />

    <Text> __________________________________________  </Text>

*/

export default function App() {
  return (
    <View style={styles.container}>
      <Perfil style={styles.tarjetas1} nombre="Mathias Santiago Reyes Antunez" carrera="TIID-221" materia="Apps Moviles" cuatrimestre="4"/>
      <Perfil style={styles.tarjetas2} nombre="Juan Pérez" carrera="TIID-221" materia="Apps Moviles" cuatrimestre="4" />
      <Perfil style={styles.tarjetas3} nombre="María García" carrera="TIID-221" materia="Apps Moviles" cuatrimestre="4" />

    </View>
  );
}


/* 3. Zona de estilos y posicionamientos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4eed5',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarjetas1:{
    backgroundColor: 'pink',
  },
  tarjetas2:{
    backgroundColor: 'yellow',
  },
  tarjetas3:{
    backgroundColor: 'orange',
  }
});
