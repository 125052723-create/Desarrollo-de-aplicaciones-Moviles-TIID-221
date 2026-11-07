import { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Alert, FlatList, Pressable, SafeAreaView, ActivityIndicator } from 'react-native';

function TextInputScreen({ titulo, value, onChangeText }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
                {titulo}
            </Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

export default function RegistroScreen() {

    const [cargando, setCargando] = useState(true);
    const [cargandoLibro, setCargandoLibro] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        const setTemporizador = setTimeout(() => {
            setCargando(false);
        }, 2000);
        return () => clearTimeout(setTemporizador);
    }, []);

    const guardarLibro = () => {
        const nombreLibro = titulo.trim();
        const autorLibro = autor.trim();
        const generoLibro = genero.trim();

        if (nombreLibro === '' || autorLibro === '' || generoLibro === '') {
            Alert.alert(
                'Campos vacíos',
                'Completa todos los campos'
            );
            return;
        }

        if (!isNaN(Number(autorLibro)) || !isNaN(Number(generoLibro))) {
            Alert.alert(
                'Campo inválido',
                'Los campos "Autor" y "Genero" no pueden contener números'
            );
            return;
        }

        setLibros((currentLibros) => [
            ...currentLibros, {
                id: currentLibros.length,
                titulo: nombreLibro,
                autor: autorLibro,
                genero: generoLibro
            }
        ]);

        setTitulo('');
        setAutor('');
        setGenero('');

        setCargandoLibro(true);

        setTimeout(() => {
            setCargandoLibro(false);
            Alert.alert(
                'Libro guardado correctamente',
                `
            Titulo: ${nombreLibro}
            Autor: ${autorLibro}
            Genero: ${generoLibro}
            `
            );
        }, 4000);



    }

    if (cargando) {
        return (
            <View style={styles.splash}>
                <Text style={styles.splashTitle}>
                    Bienvenido
                </Text>
                <Text style={styles.splashDescription}>
                    Registro de Libros
                </Text>
            </View>
        );
    }

    return (
        <ImageBackground
            source={require('../assets/library.jpeg')}
            resizeMode='cover'
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.screenContent}>
                    <Text style={styles.titulo}>Catalogo de libros</Text>
                    <TextInputScreen
                        titulo={'Titulo'}
                        value={titulo}
                        onChangeText={setTitulo}
                    />
                    <TextInputScreen
                        titulo={'Autor'}
                        value={autor}
                        onChangeText={setAutor}
                    />
                    <TextInputScreen
                        titulo={'Genero'}
                        value={genero}
                        onChangeText={setGenero}
                    />

                    <Pressable
                        style={[
                            styles.guardarLibro,
                            cargandoLibro && styles.guardarLibroDeshabilitado
                        ]}
                        onPress={guardarLibro}
                        disabled={cargandoLibro}
                    >
                        <Text style={styles.guardarLibroText}>
                            {cargandoLibro ? 'Guardando...' : 'Agregar libro'}
                        </Text>
                    </Pressable>

                    {cargandoLibro && (
                    <>
                        <ActivityIndicator
                            color="#1783c6"
                            size="large"
                            style={styles.indicador}
                        />
                        <Text style={styles.texto}>Guardando...</Text>
                    </>
                )
                }

                    <Text style={styles.totalLibros}>
                        Total de libros: {libros.length}
                    </Text>
                </View>
                <FlatList
                    style={styles.list}
                    contentContainerStyle={styles.listContent}
                    data={libros}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.libroItem}>
                            <Text style={styles.libroTitulo}>{item.titulo}</Text>
                            <Text style={styles.libroAutor}>{item.autor}</Text>
                            <Text style={styles.libroGenero}>{item.genero}</Text>
                        </View>
                    )}
                />

            </SafeAreaView>
        </ImageBackground>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F5F9'
    },
    splashTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    splashDescription: {
        fontSize: 20,
        textAlign: 'center'
    },
    background: {
        flex: 1,
        width: '100%',
        alignSelf: 'stretch'
    },
    screenContent: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 15,
        alignItems: 'stretch'
    },
    list: {
        flex: 1,
        width: '100%'
    },
    listContent: {
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 28
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20
    },
    inputContainer: {
        marginBottom: 16,
        width: '100%'
    },
    inputLabel: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    libroItem: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    libroTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    libroAutor: {
        fontSize: 16,
        color: '#333',
    },
    libroGenero: {
        fontSize: 14,
        color: '#666',
    },
    totalLibros: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 18,
        color: '#fff',
    },
    guardarLibro: {
        width: '100%',
        backgroundColor: '#224fb0',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center'
    },
    guardarLibroDeshabilitado: {
        backgroundColor: '#808080'
    },
    guardarLibroText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    indicador: {
        margin: 16,
        alignSelf: 'center'
    },
    texto: {
        textAlign: 'center',
        color: '#fff'
    },
});
