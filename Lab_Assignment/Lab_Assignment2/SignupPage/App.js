
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const image ={ uri: "https://image.shutterstock.com/image-vector/shiny-colorful-musical-beats-on-260nw-784839304.jpg" };

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      ////========
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <StatusBar style="auto" />
      <Text style={styles.TextInput}>Beats<b>MUSIC</b></Text>
      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupText}><b>SIGNUP</b></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}><b>LOGIN</b></Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    justifyContent: "center",
    height:"100%",
    width:"100%",
  },
 
  TextInput: {
    fontFamily: "bauhaus93",
    color: "white",
    fontSize: 50,
    paddingTop: 30,
    paddingBottom: 250,
    alignContent:"center",
    marginLeft:580,
  },

   signupText: {
    color: "white",
    fontSize: 13,
  },
 
  loginBtn: {
    borderWidth:2,
    width: "30%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "white",
    marginLeft:500,
  },

  signupBtn: {
    borderColor: "white",
    borderWidth:2,
    width: "30%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "black",
    marginLeft:500,
  },
});

