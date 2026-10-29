
/* 1. Zona de importaciones */
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';


/* 2. Zona render o Main */

export default function SafeScreen() {
  const canciones = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>MUSICA</Text>

      <View style={styles.reproductor}>
        <Text style={styles.texto}>lista de musica</Text>
        <Text>la musica mas escuchada</Text>
      </View>
      <Text style={styles.subtitulo}>Canciones disponibles</Text>
      <ScrollView style={styles.lista} contentContainerStyle={styles.contenidoLista} showsVerticalScrollIndicator={true}>
        {canciones.map((item, index) => (
          <View key={index} style={styles.tarjeta}>
            <Text style={styles.textoLista}>{item}</Text>
          </View>
        ))}


      </ScrollView>

    </SafeAreaView>

  );
}


/* 3. Zona de estilos y posicionamientos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4eed5',
    marginTop: 40,
    padding: 20,
    alignItems: 'center'
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  reproductor: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center'
  },
  texto: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center'
  },
  lista: {
    flex: 1,
  },
  tarjeta: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
    borderRadius: 15
  },
  textoLista: {
    fontSize: 18,
    backgroundColor: 'white',
    textAlign: 'center',
  }
});
