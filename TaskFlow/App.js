import React, {useState, useRef, useMemo, useCallback} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {View, Text, Modal, TextInput, Pressable, StyleSheet, StatusBar} from 'react-native';
import BottomSheet, { BottomSheetView} from '@gorhom/bottom-sheet';

export default function App(){
    const [modalVisible, setModalVisible ] = useState(false);
    const [task, setTask] = useState('');
    const [savedTask, setSavedTask] = useState('');
    const [priority, setPriority] = useState('Media');

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['35%', '55%'], []);

    const openBottomSheet = useCallback(() => {
        bottomSheetRef.current?.snapToIndex(0);
    }, []);

    const saveTask = () => {
        if(task.trim() === ''){
            return;
        }

        setSavedTask(task.trim());
        setTask('');
        setModalVisible(false);
    };

    const selectPriority = (selectedPriority) => {
        setPriority(selectedPriority);
        bottomSheetRef.current?.close();
    }

    return(
        <GestureHandlerRootView style={StyleSheet.root}>
            <StatusBar barStyle='dark-content'/>
            <View style={styles.container}>
                <Text style={styles.title} TaskFlow></Text>
                <Text style={styles.subtitle}>Organiza tus tareas</Text>

                <Pressable style={styles.primaryButton} onPress={() => {setModalVisible(true)}}>
                    <Text style={styles.buttonText}>+ Nueva Tarea</Text>
                </Pressable>

                <Pressable style={styles.secondaryButton} onPress={openBottomSheet}>
                    <Text style={styles.buttonText}>Seleccionar prioridad</Text>
                </Pressable>

                {savedTask !== '' && (
                    <View style={styles.taskCard}>
                        <Text style={styles.cardTitle}>Mi tarea</Text>
                        <Text style={styles.taskText}>{savedTask}</Text>
                        <Text style={styles.priorityText}>Prioridad: {priority}</Text>
                    </View>
                )}
            </View>

            <Modal visible={modalVisible} animationType='slide' transparent onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalTitle}>Nueva Tarea</Text>
                        <Text style={styles.description}>Escribe el nombre de tu actividad.</Text>
                        <TextInput style={styles.input} placeholder='Ej. Estudiar React Native' value={task} onChangeText={setTask} />

                        <Pressable style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.cancelText}>Cancelar</Text>
                        </Pressable>
                    </View>

                </View>
            </Modal>

            <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints} enablePanDownToClose backgroundStyle={styles.sheetBackground} handleIndicatorStyle={styles.handleIndicator}>
                <BottomSheetView style={styles.sheetContent}>
                    <Text style={styles.sheetTitle}>Selecciona la prioridad</Text>
                    <Text style={styles.description}>Elige la importancia de tu tarea.</Text>
                    {['Baja', 'Media', 'Alta'].map((item) => {
                        <Pressable key={item} style={[styles.priorityOption, priority === item && styles.selectedOption]}
                        onPress={() => selectPriority(item)}>
                            <Text style={[styles.priorityText, priority === item && styles.selectedText]}>{item}</Text>

                            {priority == item && (
                                <Text style={styles.checkmark}>✅</Text>
                            )

                            }
                        </Pressable>
                    })}
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>

    );
}


const styles = StyleSheet.create({
    root: {flex: 1},
    container:{
        flex: 1,
        backgroundColor: '#F4F5FB',
        padding: 24,
        paddingTop: 70
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#5144D8',
        textAlign: 'center'
    },
    subtitle:{
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 32,
    },
    primaryButton:{
        backgroundColor: '#SB4AE8',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 24
    },
    secondaryButton:{
        backgroundColor: '#292640',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 24
    },
    buttonText:{
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    taskCard:{
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 16,
        elevation: 3
    },
    cardTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12
    },
    taskText:{
        fontSize: 16,
        color: '#333',
        marginBottom: 12
    },
    priorityText:{
        fontSize: 15,
        color: '#555'
    },
    modalBackground:{
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: 'rgba(0,0,0,0.45)'
    },
    modalCard:{
        backgroundColor: '#FFF',
        padding: 24,
        borderRadius: 20
    },
    modalTitle:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5144D8',
        marginBottom: 10
    },
    description:{
        fontSize: 14,
        color: '#777',
        marginBottom: 18
    },
    input:{
        borderWidth: 1,
        borderColor: '#D8D5EA',
        borderRadius: 10,
        padding: 14,
        fontSize: 16,
        marginBottom: 20
    },
    cancelButton:{
        padding: 12,
        alignItems: 'center'
    },
    cancelText:{
        color: '#5144D8',
        fontWeight: 'bold'
    },
    sheetBackground:{
        backgroundColor: '#FFF'
    },
    handleIndicator:{
        backgroundColor: 'C8C7D2',
        width: 42
    },
    sheetContent:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 12
    },
    sheetTitle:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#292640',
        marginBottom: 8
    },
    priorityOption:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderWidth: 1,
        borderColor: '#E5E3F0',
        borderRadius: 12,
        marginBottom: 10
    },
    selectedOption:{
        backgroundColor: '#EFEDFF',
        borderColor: '#5B4AE8'
    },
    selectedText:{
        color: '#5144D8',
        fontWeight: 'bold'
    },
    checkmark:{
        color: '#5144D8',
        fontSize: 20,
        fontWeight: 'bold'
    }
});