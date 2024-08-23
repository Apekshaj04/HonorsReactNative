import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, Button, View, FlatList } from 'react-native';

export default function App() {
  const [todo, setTodo] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    if (todo.trim()) {
      setTodo(''); 
      setTasks([...tasks, todo]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>To Do List</Text>

      <TextInput
        placeholder={'Enter the task'}
        style={styles.input}
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <Button title="Submit" onPress={handleSubmit} style={styles.btn} />

      <View style={styles.list}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn:{
    width:'10px'
  },
  input: {
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: 'beige',
    padding: 10, // Added padding for better input spacing
    marginBottom: 10, // Margin for spacing between input and button
  },
  container: {
    marginTop:0,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    marginTop: 20,
  },
  task: {
    padding: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
