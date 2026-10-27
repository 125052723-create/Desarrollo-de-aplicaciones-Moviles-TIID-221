
/* 1. Zona de importaciones */
import { StyleSheet, View, Button, Text } from 'react-native';
import { useState } from 'react';
import TarjetasScreen from './TarjetasScreen.js';
import SafeScreen from './SafeScreen.js';
import PressableScreen from './PressableScreen.js';
import TextInputScreen from './TextInputScreen.js';
import FlastListScreen from './FlatListScreen.js';
import ModalScreen from './ModalScreen.js';
import ActivityIndicatorScreen from './ActivityIndicatorScreen.js';
import ImageBackgroundScreen from './ImageBackgroundScreen.js';

/* 2. Zona render o Main */

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch (screen) {
        case 'tarjetas':
            return <TarjetasScreen />;
        case 'safe':
            return <SafeScreen />;
        case 'pressable':
            return <PressableScreen/>;
        case 'text':
            return <TextInputScreen/>;
        case 'flat':
            return <FlastListScreen/>;
        case 'image':
            return <ImageBackgroundScreen/>;
        case 'modal':
            return <ModalScreen/>;
        case 'activity':
            return <ActivityIndicatorScreen/>;
        case 'menu':
        default:
            return (
                <View style={styles.container}>
                    <Text>Menu de Practicas </Text>
                    <Button title="Pract:Tarjetas" onPress={() => { setScreen('tarjetas') }}> </Button>
                    <Button title="Pract:SafeAreaView" onPress={() => { setScreen('safe') }}> </Button>
                    <Button title="Pract:Pressable" onPress={() => {setScreen('pressable')}}> </Button>
                    <Button title="Pract:TextInput" onPress={() => {setScreen('text')}}> </Button>
                    <Button title="Pract:FlatListScreen" onPress={() => {setScreen('flat')}}> </Button>
                    <Button title="Pract:ImageBackground" onPress={() => {setScreen('image')}}> </Button>
                    <Button title="Pract:Modal" onPress={() => {setScreen('modal')}}> </Button>
                    <Button title="Pract:ActivityIndicator" onPress={() => {setScreen('activity')}}> </Button>


                </View>
            );
    } // end switch
} //end funcion


/* 3. Zona de estilos y posicionamientos */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4eed5',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
});
