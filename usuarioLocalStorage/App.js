import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AltaUsuariosScreen from './screens/AltaUsuariosScreen';


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
