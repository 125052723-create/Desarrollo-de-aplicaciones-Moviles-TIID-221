import React, {useState, useRef, useMemo, useCallback} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {View, Text, Modal, TextInput, Pressable, StyleSheet, StatusBar, FlatList, Button} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

export default function ModalScreen(){
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [priority, setPriority] = useState('Media');

  const bottomSheetRef = useRef(null);
  const nextTaskId = useRef(0);
  const snapPoints = useMemo(() => ['35%', '55%'], []);

  const openBottomSheet = useCallback(() =>{
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  const saveTask = () => {
    const taskName = task.trim();
    if(taskName ===''){
      return;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: nextTaskId.current++,
        name: taskName,
        priority
      }

    ]);
    setTask('');
    setModalVisible(false);
  };

  const selectPriority = (selectedPriority) => {
    setPriority(selectedPriority);
    bottomSheetRef.current?.close();
  }

  return(
    <GestureHandlerRootView style={styles.root} >
      <StatusBar barStyle='dark-content'/>
      <View style={styles.container}>
        <Text style={styles.title}>Organiza tus tareas</Text>
        <Text style={styles.subtitle}>Crea una nueva Tarea</Text>

        <Pressable style={styles.primaryButton} onPress={() => {setModalVisible(true)}}>
          <Text style={styles.buttonText}>+ Nueva Tarea</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton} onPress={() =>{openBottomSheet}}>
          <Text style={styles.buttonText}>Seleccionar Prioridad</Text>
        </Pressable>

        <FlatList style={styles.tasksList}
        contentContainerStyle={styles.tasksListContent}
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item, index}) => (
          <View style={styles.taskCard}>
            <Text style={styles.cardTitle}>Tarea {index + 1}</Text>
            <Text style={styles.taskText}>{item.name}</Text>
            <Text style={styles.priorityText}>Prioridad: {item.priority}</Text>
          </View>
        )}
        />
      </View>

      <Modal visible={modalVisible} animationType='slide'
      transparent onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Nueva Tarea</Text>
            <Text style={styles.description}>Escribe el nombre de tu actividad</Text>
            <TextInput 
            style={styles.input} 
            placeholder='Ej. Estudiar React Native'
            value={task}
            onChangeText={setTask}/>

            <Pressable style={styles.primaryButton} onPress={saveTask}>
              <Text style={styles.buttonText}>Guardar tarea</Text>
            </Pressable>

            <Pressable style={styles.cancelButton} onPress={() =>{setModalVisible(false)}}>
              <Text style={stlyes.cancelText}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <BottomSheet 
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose 
      backgroundStyle={styles.sheetBackground}
      handleIndicatorStyle={styles.handleIndicator}>
        <BottomSheetView style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>Selecciona la prioridad</Text>
          <Text style={styles.description}>Elige la importancia de tu tarea</Text>
          {['Baja', 'Media', 'Alta'].map((item) =>{
            return(
              <Pressable
              key={item}
              style={[styles.priorityOption, priority === item && styles.selectedOption]}
              onPress={() => selectedPriority(item)}
              >
                <Text style={[styles.priorityText, priority === item && styles.selectedText]}>
                  {item}
                </Text>
              </Pressable>
            );
          })

          }
        </BottomSheetView>
      </BottomSheet>

    </GestureHandlerRootView>
  );
}