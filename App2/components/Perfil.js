import { View, Text, Button } from 'react-native';
import { useState } from 'react';

export const Perfil = ({ nombre, carrera, materia, cuatrimestre }) => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <View>
            <Text>Nombre: {nombre}</Text>

            {mostrar &&
            <>
            <Text>Carrera: {carrera}</Text>
            <Text>Materia: {materia}</Text>
            <Text>Cuatrimestre: {cuatrimestre} </Text>
            </>
            }

            <Button title=" Ver perfil" onPress={()=>setMostrar(!mostrar)}></Button>
        </View>

    )
}