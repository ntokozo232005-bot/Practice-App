import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button,Image } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>

      <View style={styles.mainPicture}>
        <Image style={styles.ImageSize} source={require('./images/helloKitty.jpg')} />

      </View>



      <Text style={styles.welcomeText}>Welcome to my app!</Text>
      <Text>Enter Name:</Text>
      <TextInput placeholder="First Name" />
      <Text>Enter Surname:</Text>
      <TextInput placeholder="Last Name" />
      <Button title="Add User" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({welcomeText: {
  paddingTop: 40,
  color: 'purple',
  fontSize: 28,
  fontWeight: 'bold',
  textAlign: 'center'
},
  mainPicture: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageSize: {
    width: 350,
    height: 350,
  },
  HeadingText: {
    fontWeight: 'bold',
  },
    InputBox: {
      fontWeight: 'bold',

    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});