import React, { useCallback, useState } from 'react';
import { SafeAreaView,View,Text, TextInput, Pressable, StyleSheet,} from 'react-native';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';

import { actualizarUsuario as guardarCambios, obtenerUsuarios } from '../services/usuariosStorage';


export default function ActualizarUsuarioScreen() {

  const { id } = useLocalSearchParams();
  const usuarioId = Array.isArray(id) ? id[0] : id;
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [cargando, setCargando] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [mensaje, setMensaje] = useState('');
  
  useFocusEffect(
    useCallback(() => {
      let activa = true;

      const cargarUsuario = async () => {
        setCargando(true);
        setMensaje('');
        try {
          const usuarios = await obtenerUsuarios();
          const usuario = usuarios.find((elemento) => elemento.id === usuarioId);
          if (!usuario) throw new Error('No se encontró el usuario que deseas actualizar.');
          if (activa) {
            setNombre(usuario.nombre);
            setEdad(String(usuario.edad));
          }
        } catch (error) {
          if (activa) setMensaje(error.message);
        } finally {
          if (activa) setCargando(false);
        }
      };

      cargarUsuario();
      return () => {
        activa = false;
      };
    }, [usuarioId])
  );

  const actualizar = async () => {
    setMensaje('');
    setGuardando(true);
    try {
      await guardarCambios(usuarioId, { nombre, edad });
      router.back();
    } catch (error) {
      setMensaje(error.message);
    } finally {
      setGuardando(false);
    }
  };


  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Actualizar Usuario
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          Nombre
        </Text>

        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Nombre"
        />

        <Text style={styles.label}>
          Edad
        </Text>

        <TextInput
          style={styles.input}
          value={edad}
          onChangeText={setEdad}
          placeholder="Edad"
          keyboardType="numeric"
        />

        <Pressable
          style={styles.boton}
          onPress={actualizar}
          disabled={cargando || guardando}
        >
          <Text style={styles.textoBoton}>
            {guardando ? 'Guardando...' : 'Guardar cambios'}
          </Text>
        </Pressable>

        {!!mensaje && <Text style={styles.mensaje}>{mensaje}</Text>}

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    elevation: 5,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },

  boton: {
    backgroundColor: '#FACC15',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBoton: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // ---
  mensaje: {
    marginTop: 16,
    color: '#B91C1C',
    textAlign: 'center',
  },

});