
/* 1. Zona de importaciones */
import { StyleSheet, View, Text } from 'react-native';


/* 2. Zona render o Main */

export default function PressableScreen() {
  return (
    <View style={styles.container}>
      <Text> Practica 11. </Text>
      <Text> Alvaro David Castro Ortega, Alan Damian Cuapio Serrano</Text>
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
