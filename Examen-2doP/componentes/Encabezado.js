import { StyleSheet, Text, View, } from 'react-native';

export const Encabezado = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Hola, Estudiante!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
   
    padding: 20,
    alignItems: 'right',
  },
  titulo: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});


