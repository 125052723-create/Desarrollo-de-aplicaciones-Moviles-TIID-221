
import React, { useState } from 'react';

import { SafeAreaView, View, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';

function SafeScreen({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    );
}

function TextInputScreen({ titulo, valor, cambiar, teclado }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{titulo}</Text>

            <TextInput
                style={styles.input}
                placeholder={`Ingresa ${titulo.toLowerCase()}`}
                value={valor}
                onChangeText={cambiar}
                keyboardType={teclado || 'default'}
            />
        </View>
    );
}

function PressableScreen({ pregunta, valor, cambiar }) {
    return (
        <View style={styles.questionContainer}>
            <Text style={styles.label}>{pregunta}</Text>

            <View style={styles.options}>
                <Pressable
                    style={[
                        styles.option,
                        valor === 'Sí' && styles.selected
                    ]}
                    onPress={() => cambiar('Sí')}
                >
                    <Text style={styles.optionText}>Sí</Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.option,
                        valor === 'No' && styles.selected
                    ]}
                    onPress={() => cambiar('No')}
                >
                    <Text style={styles.optionText}>No</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default function RegistroScreen() {

    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');

    const [taller, setTaller] = useState('No');
    const [constancia, setConstancia] = useState('No');
    const [deportes, setDeportes] = useState('No');

    const enviarRegistro = () => {

        if (nombre.trim() === '' || carrera.trim() === '' || semestre.trim() === '') {
            Alert.alert(
                'Campos vacios',
                'Completa todos los campos'
            );
            return;
        }

        if (isNaN(Number(semestre.trim()))) {
            Alert.alert(
                'Dato incorrecto',
                'El semestre debe contener solamente números'
            );
            return;
        }

        Alert.alert(
            'Registro enviado',
            `Nombre: ${nombre}
            Carrera: ${carrera}
            Semestre: ${semestre}
            Taller: ${taller}
            Constancia: ${constancia}
            Deportes: ${deportes}`
        );
    };

    return (
        <SafeScreen>

            <Text style={styles.title}>
                Registro de Evento Universitario
            </Text>

            <Text style={styles.subtitle}>
                Completa tus datos para registrarte al evento
            </Text>


            <TextInputScreen
                titulo="Nombre completo"
                valor={nombre}
                cambiar={setNombre}
            />

            <TextInputScreen
                titulo="Carrera"
                valor={carrera}
                cambiar={setCarrera}
            />

            <TextInputScreen
                titulo="Semestre"
                valor={semestre}
                cambiar={setSemestre}
                teclado="numeric"
            />


            <PressableScreen
                pregunta="Asistira al taller?"
                valor={taller}
                cambiar={setTaller}
            />

            <PressableScreen
                pregunta="Requiere constancia?"
                valor={constancia}
                cambiar={setConstancia}
            />

            <PressableScreen
                pregunta="Participara en actividades deportivas?"
                valor={deportes}
                cambiar={setDeportes}
            />

            <Pressable
                style={styles.button}
                onPress={enviarRegistro}
            >
                <Text style={styles.buttonText}>
                    Enviar Registro
                </Text>
            </Pressable>

        </SafeScreen>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 20,
        justifyContent: 'center'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },

    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 25,
        color: '#666'
    },

    inputContainer: {
        marginBottom: 15
    },

    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    },

    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16
    },

    questionContainer: {
        marginBottom: 15
    },

    options: {
        flexDirection: 'row',
        gap: 10
    },

    option: {
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center'
    },

    selected: {
        backgroundColor: '#cce5ff',
        borderColor: '#007bff'
    },

    optionText: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 15
    },

    buttonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    }

});
