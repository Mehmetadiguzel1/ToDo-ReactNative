import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
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
});
