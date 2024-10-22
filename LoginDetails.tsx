import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import {images} from '../Assets/images';

const LoginDetails = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  
      keyboardVerticalOffset={100}  
    >
      <View style={{ flex: 1 }} >
        <ScrollView horizontal={true}>
          <Image source={images.family} style={styles.image} />
          <Image source={images.family1} style={styles.image} />
          <Image source={images.family2} style={styles.image} />
          <Image source={images.family3} style={styles.image} />
        </ScrollView>
        <View style={styles.centeredImageContainer}>
          <Image source={images.logo} style={styles.centeredImage} />
        </View>
        <View>
          <Text style={styles.text}>Enter Login Details</Text>
          <View style={styles.container} >
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="gray"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign:'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1592bf',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    color: '#18191a',
  },
  button: {
    backgroundColor: '#1592bf',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginLeft:40,
    marginRight:40,
    marginBottom:10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
  },
  image: {
    height: 400,
    width: 350,
    marginLeft: 25,
    marginRight: 20,
  },
  centeredImageContainer: {
    alignItems: 'center',
  },
  centeredImage: {
    width: 100,
    height: 100,
  },
});

export default LoginDetails;
