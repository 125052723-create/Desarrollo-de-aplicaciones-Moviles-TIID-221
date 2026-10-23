
/* 1. Zona de importaciones */
import { StyleSheet, View } from 'react-native';
import MenuScreen from './screens/MenuScreen.js';


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
      <MenuScreen></MenuScreen>
    </View>
  );
}


/* 3. Zona de estilos y posicionamientos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4eed5',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'left',
  }
});
