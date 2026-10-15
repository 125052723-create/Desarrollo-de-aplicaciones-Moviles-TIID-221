
/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo.js';
import {Saludo2} from './components/Saludo2.js'


/* 2. Zona render o Main*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native!</Text>


      <Image source={require('./assets/wave.png')} />

    <Text>____________________________________________</Text>


    <Saludo></Saludo>
    <Saludo/>

    <Text>____________________________________________</Text>

    <Saludo2/>
      <StatusBar style="auto" />
    </View>
  );
}


/* 3. Zona de estilos y posicionamientos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4eed5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
