import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.welcomeTxt}>
      <Text>Welcome to my app!</Text>
      <Text>Enter your name:</Text>
      <TextInput placeholder="Ntokozo" />
      <Text>Enter your surname:</Text>
      <TextInput placeholder="Ngcobo" />
      <StatusBar style="auto" />
      <Button title="Add User"/>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeTxt: {
    paddingTop: 40,
    color: 'pink',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',

  
    

  },
});
