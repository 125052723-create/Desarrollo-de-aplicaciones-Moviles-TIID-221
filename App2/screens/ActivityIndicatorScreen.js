
/* 1. Zona de importaciones */
import { StyleSheet, View, Text } from 'react-native';


/* 2. Zona render o Main */

export default function ActivityIndicatorScreen() {
  return (
    <View style={styles.container}>
      <Text> Practica 16. </Text>
      <Text>ALEXA ARELLANO HERNANDEZ</Text>
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
