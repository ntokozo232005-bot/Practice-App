import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleAddUser = () => {
    console.log('Added:', name, surname);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./images/helloKitty.jpg')}
        style={styles.image}
      />
      <Text style={styles.welcomeTxt}>Welcome to my app!</Text>

      <Text style={styles.label}>Enter your name:</Text>
      <View style={styles.divider} />
      <TextInput
        placeholder="Ntokozo"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.label}>Enter your surname:</Text>
      <TextInput
        placeholder="Ngcobo"
        value={surname}
        onChangeText={setSurname}
        style={styles.input}
      />

      <StatusBar style="auto" />
      <Button title="Add User" onPress={handleAddUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  welcomeTxt: {
    paddingTop: 40,
    color: 'pink',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  divider: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    marginBottom: 10,
  },
});