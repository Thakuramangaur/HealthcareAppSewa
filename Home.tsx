import { StyleSheet, Text, View,Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '../Assets/images';

const Home = ({ navigation }) => {
    return (
      <View >
        <View>
            <ScrollView horizontal={true} >
            <Image source={images.family} style={styles.image} />
            <Image source={images.family1} style={styles.image} />
            <Image source={images.family2} style={styles.image} />
            <Image source={images.family3} style={styles.image} />
            </ScrollView>
            <View style={styles.centeredImageContainer} >
            <Image source={images.logo} style={styles.centeredImage} />
            </View>
        </View>
        <Text style={styles.red} >Welcome to "Sewa"</Text>
        <View>
      {/* Login Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginDetails')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign-Up Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
        </View>
      </View>
    )
  };

const styles = StyleSheet.create({
    red:{
        color: '#1592bf',
        fontWeight: 'bold',
        fontSize:30,
        textAlign: 'center',
      },
      image: {
        height:400,
        width:350,
        marginLeft:25,
        marginRight:20,
      },
      centeredImageContainer: {
        marginTop:20,
        justifyContent: 'center', 
        alignItems: 'center',
      },
      centeredImage: {
        width: 100,
        height: 100,
      },
      button: {
        backgroundColor: '#1592bf',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 40,
        marginRight:40,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      title: {
        fontSize: 24,
        marginBottom: 30,
        fontWeight: 'bold',
      },
});
export default Home;