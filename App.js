import React, {useState} from 'react';
import { TextInput,StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [tasksItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...tasksItems, task])
    setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy = [...tasksItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }



  return (
    <View style={styles.container}>
      
      {/* Tasks */}
      <View style={styles.tasksWrapper}>

        <Text style={styles.sectionTitle}>ToDo List </Text>
        <View style={styles.items}>
          {/* This is where the tasks */}
        {
          tasksItems.map((item, index) => {
            return <Task key={index} text={item}/>
          })
        }
        </View>
      </View>
      {/* Write notes */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Note yaz'} value={task} onChangeText={text => setTask(text)} placeholderTextColor="#FF730F"/>

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
    backgroundColor: '#010101',
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
    backgroundColor: '#C0C0C0',
    borderRadius: 60,
    borderColor: '#FF730F',
    borderWidth: 1,
    fontSize: 15,
    fontWeight: 'bold',
    
    
  },
  
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#C0C0C0',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FF730F',
    borderWidth: 1,

  },
  addText: {
    color: '#FF730F'
  },
});
