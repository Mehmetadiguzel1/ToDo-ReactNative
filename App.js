import React, {useState} from 'react';
import { TextInput,StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();

  const handleAddTask = () => {
    consol.log(task);
  }



  return (
    <View style={styles.container}>
      
      {/* Tasks */}
      <View style={styles.tasksWrapper}>

        <Text style={styles.sectionTitle}>ToDo List </Text>
        <View style={styles.items}>
          {/* This is where the tasks */}
        
        <Task text={'Tasks 1'}/>
        <Task text={'Tasks 2'}/>
        </View>
      </View>
      {/* Write notes */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>

        <TextInput styles={styles.input} placeholder={'Note yaz'} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()} >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    padding: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FEA101',
    marginBottom: 10
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    width: 250,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'red',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 3
    
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#C0C0C0',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',

  },
  addText: {},
});
