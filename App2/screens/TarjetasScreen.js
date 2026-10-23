
/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from '../components/Perfil.js'


/* 2. Zona render o Main */

export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
      <Perfil style={styles.tarjetas1} nombre="Mathias Santiago Reyes Antunez" carrera="TIID-221" materia="Apps Moviles" cuatrimestre="4" />
      <Perfil style={styles.tarjetas2} nombre="Juan Pérez" carrera="TIID-221" materia="Apps Moviles" cuatrimestre="4" />
      <Perfil style={styles.tarjetas3} nombre="María García" carrera="TIID-221" materia="Apps Moviles" cuatrimestre="4" />
      <StatusBar style="auto" />

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
  },
  tarjetas1: {
    backgroundColor: 'pink',
  },
  tarjetas2: {
    backgroundColor: 'yellow',
  },
  tarjetas3: {
    backgroundColor: 'orange',
  }
});
