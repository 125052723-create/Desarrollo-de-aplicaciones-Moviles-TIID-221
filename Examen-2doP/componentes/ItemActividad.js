import { Pressable } from 'react-native';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export const TarjetaActividad=({ nombre, descripcion}) => {

    const [mostrar, setMostrar] = useState(false);
    const [status, setStatus ] = useState(false);

    return (
        
        <View style={estilos.tarjetas}>

            <Text style={estilos.nombre}>{nombre}</Text>

            {mostrar &&
            <>
           
            <Text style={estilos.descripcion}>{descripcion}</Text>
            
            </>
            }

            <Pressable  style={estilos.boton} onPress={()=>setMostrar(!mostrar)}>
                <Text>Ver Actividad</Text>
            </Pressable>
            <switch
            value={status}
            onevalueChange={setStatus}
            />
            <text> {status? 'Completada' : 'Pendiente'} </text>
            <statusbar style="auto" />



        </View>

    )
} 

const  estilos = StyleSheet.create({
    nombre:{
        fontSize: 24,
        fontWeight: 600,
        textTransform: 'uppercase'
    },
    descripcion:{
        fontSize: 20,
        color: 'red',
        fontFamily: 'Roboto'
    },
    otrotexto:{
        fontSize: 18,
        color: 'blue',
        fontFamily: 'Courier',
        fontStyle: 'italic'
    },
    tarjetas:{
        borderWidth: 3,
        borderRadius: 10,
        padding: 15,
        margin: 10,
        width: '90%',
    },
    boton:
    {
        backgroundColor: '#1783c6',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    }
});