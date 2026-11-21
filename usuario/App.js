import React, { useState, useEffect } from 'react';

import AltaUsuariosScreen from './screens/AltaUsuariosScreen';
import ConsultaUsuariosScreen from './screens/ConsultaUsuariosScreen';
import { StyleSheet } from 'react-native';


export default function App() {
  return (
        <AltaUsuariosScreen></AltaUsuariosScreen>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
