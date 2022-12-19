
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { View,TextInput,Text,StyleSheet,TouchableOpacity,} from 'react-native';

// function LoginScreen({route,navigation}){
//   return(
//     <View style={styles.container}>
      
//       <View style={{flex:0.4,justifyContent:'center',borderWidth:3,borderColor:'#fff'}}>
//         <Text style={styles.TextInput}>Beats MUSIC</Text>
//       </View>
//       <View style={ styles.view2}>
//       <Text style={styles.view2Text}>{'LOGIN FORM'}</Text>
//       </View>  

//       <View style={ styles.view3}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Username"
//           placeholderTextColor={'#999'}
//         />
//       </View>

//       <View style={ styles.view4}>
//       <TextInput
//           style={styles.textInput}
//           placeholder="Password"
//           placeholderTextColor={'#999'}
//           secureTextEntry={true}
//         />
//       </View>

//       <View style= { styles.view5}>
//       <TouchableOpacity style={styles.TouchableOpacity5a}>
//         <Text style={styles.text5a}>{'Login'}</Text>
//       </TouchableOpacity>
//       </View>
            
//       <View style= { styles.view6}>
//         <Text style={styles.text6a}> {'forget you password?'}</Text>
//       </View>

//       <View style= { styles.view7}>
//         <TouchableOpacity onPress={() => navigation.navigate("signup")}>
//         <Text style={styles.text7a}> {'Dont have a Account?Sign Up'}</Text>
//         </TouchableOpacity>
//       </View>    
//    </View>
//   );
// }

// function SignupScreen({route,navigation}){
//   return(
//     <View style={styles.scontainer}>
//       {/* <View style={styles.sview1}>
//         <Image source={require('./assets/xd.jpg')} style={styles.slogo} />
//       </View>

//       <View style={styles.sview2}>
//         <View style={styles.sview2a}>
//           <TextInput
//             style={styles.stextInput}
//             placeholder="Username"
//             placeholderTextColor={'#999'}
//           />
//         </View>

//         <View style={styles.sview2b}>
//           <TextInput
//             style={styles.stextInput}
//             placeholder="Email"
//             placeholderTextColor={'#999'}
//           />
//         </View>

//         <View style={styles.sview2c}>
//           <TextInput
//             style={styles.stextInput}
//             placeholder="Password"
//             placeholderTextColor={'#999'}
//             secureTextEntry={true}
//           />
//         </View>

//         <View style={styles.sview2d}>
//           <TextInput
//             style={styles.stextInput}
//             placeholder="Phone No."
//             placeholderTextColor={'#999'}
//             keyboardType="phone-pad"
//           />
//         </View>

//         <TouchableOpacity style={styles.sTouchableOpacity2e}>
//           <Text style={styles.stextTO2e}>{'SIGN UP'}</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.sview3s}>
//         <View style={styles.sview3a}>
//           <TouchableOpacity>
//             <Text style={styles.sview3aText}>
//               {'Already Have an Account? LOGIN'}
//             </Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.sview3b}>
//           <View style={styles.sview3b1}>
//             <Text style={styles.sview3b1Text}>{'________'}</Text>
//           </View>
//           <View style={styles.sview3b2}>
//             <Text style={styles.sview3b2Text}>{'OR'}</Text>
//           </View>
//           <View style={styles.sview3b3}>
//             <Text style={styles.sview3b3Text}>{'________'}</Text>
//           </View>
//         </View>

//         <View style={styles.sview3c}>
//           <Text style={styles.sview3cText}>{'Login with Social Networks'}</Text>
//         </View>
//       </View>

//       <View style={styles.sview4s}>
//         <TouchableOpacity>
//           <Image source={require('./assets/fb.jpg')} style={styles.slogo2} />
//         </TouchableOpacity>

//         <TouchableOpacity>
//           <Image source={require('./assets/google.jpg')} style={styles.slogo2} />
//         </TouchableOpacity>
//       </View> */}
//     </View>
//   );
// }
// function ProfileScreen({route,navigation}){
//   return(
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// }
// export default function App() {
//     const Stack=createNativeStackNavigator();
//     console.log(Stack);
//     return (
//       <NavigationContainer>
//           <Stack.Navigator initialRouteName="login">
//             <Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
//             <Stack.Screen name="signup" component={SignupScreen}></Stack.Screen>
//             <Stack.Screen name="profile" component={ProfileScreen}></Stack.Screen>
//           </Stack.Navigator>
//         </NavigationContainer>
//     );
//   }

//   const styles = StyleSheet.create ({
//     container: {
//       flex: 1,
//       backgroundColor: "white",
      
//     },
//     scontainer: {
//       flex: 1,
//       backgroundColor: "white",
      
//     },
//     image: {
//       flex: 1,
//       justifyContent: "center",
//       height:"100%",
//       width:"100%",
//     },
   
   
//    view1: {
//     //flex:0.5,
//     backgroundColor:'#fff',
//     alignItems:'flex-end',
//      borderColor:'#000',
//      //borderWidth: 1,
//      //justifyContent:'center'
//      paddingTop:10,
//      paddingRight:10,
   
  
//    },
//    view2: {
//     //flex:0.2,
//     backgroundColor:'#fff',
//     alignContent:'center',
//      borderColor:'#000000',
//      //borderWidth: 1,
  
//    },
//    view3: {
//     //flex:0.1,
//     backgroundColor:'#fff',
//     alignContent:'center',
//      borderColor:'#000000',
//      borderWidth: 1,
//      height: 60,
//       width: '90%',
//       marginTop: 2,
//       borderRadius: 30,
//       alignContent:'center',
//       marginLeft:18,
      
//    },
//    view4: {
//     //flex:0.1,
//     backgroundColor:'#fff',
//     alignContent:'center',
//      borderColor:'#000000',
//     // borderWidth: 1,
//      height: 60,
//      width: '90%',
//      marginTop: 10,
//      borderWidth: 1,
//      borderRadius: 30,
//      marginLeft:18,
  
//    },
//    view5: {
//     //flex:0.1,
//     backgroundColor:'#fff',
//     alignContent:'center',
//      borderColor:'#000000',
//     // borderWidth: 1,
//      justifyContent:'center',
//      alignItems:'center',
  
//    },
//    view6: {
//     //flex:0.1,
//     backgroundColor:'#fff',
//     alignContent:'center',
//      borderColor:'#000000',
//      //borderWidth: 1,
//      alignItems:'center',
   
//    },
//    view7: {
//     //flex:0.3,
//     backgroundColor:'#fff',
//     alignContent:'center',
//      borderColor:'#000000',
//      //borderWidth: 1,
//      alignItems:'center',
//    },
  
//    //view1 fucking style
//     logo:{
//        height:100,//'40%',
//        width: '100%',//'35%',
//        borderBottomWidth:1,
//        borderBottomColor:'#000',
     
//     },
  
//     //view 2 fucking style
//     view2Text:{
//       color: '#4c245c',
//       textAlign: 'center',
//       paddingTop: 50,
//       fontFamily:"calabri",
//       fontWeight: '700',
//       fontSize:30,
//     },
//     // view 3and 4 fucking style
//     textInput: {
//       color:'#000',
//       paddingTop:28,
//       padding:30,
//       paddingEnd:20,
//     },
    
//     TextInput: {
//       fontFamily: "bauhaus93",
//       color: "purple",
//       fontSize: 50,
//       justifyContent:'center',
//       textAlign:'center'
//     },
  
//     //design 5a
//      text5a:{
//       color: "#fff",
//       fontWeight:'500',
//       fontSize:20,
//      },
  
//      //text 6a
//      text6a:
//      {
//       color: "#000",
//       fontWeight:'400',
//       fontSize:17,
//       marginTop:8,
//      }, 
//     TouchableOpacity5a:{
//       height: 60,
//       width: '70%',
//       marginTop: 10,
//       borderWidth: 1,
//       borderRadius: 20,
//       backgroundColor: '#83348b',
//       borderColor: '#83348b',
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontWeight: '500',
     
//     },
//     //text 7a fucking style
//   text7a:{
//     color: '#4c245c',
//     fontWeight:'500',
//     fontSize:20,
//     marginTop:20,
//   },
//   sview1: {
//     //flex: 0.20,
//     // borderWidth: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   sview2: {
//     //flex: 0.5,
//     // borderWidth: 1,
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   sview3: {
//     //flex: 0.15,
//     // borderWidth: 1,
//     padding: 5,
//     backgroundColor: '#fff',
//   },
//   sview4: {
//     //flex: 0.1,
//     // borderWidth: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },

//   // View 1 Element
//   slogo: {
//     height:100, //'67%',
//     width:100, //'35%',
//   },

//   // View 2 Elements

//   sview2a: {
//     height: 60,
//     width: '80%',
//     marginTop: 10,
//     borderWidth: 1,
//     borderRadius: 30,
//   },
//   stextInput: {
//     color: '#000',
//     paddingTop: 14,
//     paddingLeft: 25,
//     fontSize: 16,
//   },

//   sview2b: {
//     height: 60,
//     width: '80%',
//     marginTop: 10,
//     borderWidth: 1,
//     borderRadius: 30,
//   },
//   sview2c: {
//     height: 60,
//     width: '80%',
//     marginTop: 10,
//     borderWidth: 1,
//     borderRadius: 30,
//   },
//   sview2d: {
//     height: 60,
//     width: '80%',
//     marginTop: 10,
//     borderWidth: 1,
//     borderRadius: 30,
//   },
//   sTouchableOpacity2e: {
//     height: 60,
//     width: '80%',
//     marginTop: 10,
//     borderWidth: 1,
//     borderRadius: 20,
//     backgroundColor: '#FD941E',
//     borderColor: '#FD941E',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   stextTO2e: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   //View 3 Elements
//   sview3a: {
//     flex: 0.3,
//     // borderWidth: 1,
//   },
//   sview3aText: {
//     color: '#000',
//     textAlign: 'center',
//     fontWeight: '600',
//   },

//   sview3b: {
//     flex: 0.4,
//     // borderWidth: 1,
//     flexDirection: 'row',
//     padding: 5,
//   },
//   sview3b1: {
//     flex: 0.4,
//     // borderWidth: 1,
//   },
//   sview3b1Text: {
//     color: '#000',
//     textAlign: 'center',
//     paddingTop: 3,
//     fontWeight: '600',
//   },
//   sview3b2: {
//     flex: 0.2,
//     // borderWidth: 1,
//   },
//   sview3b2Text: {
//     color: '#999',
//     textAlign: 'center',
//     paddingTop: 8,
//     fontWeight: '600',
//   },
//   sview3b3: {
//     flex: 0.4,
//     // borderWidth: 1,
//   },
//   sview3b3Text: {
//     color: '#000',
//     textAlign: 'center',
//     paddingTop: 3,
//     fontWeight: '600',
//   },

//   sview3c: {
//     flex: 0.3,
//     // borderWidth: 1,
//   },
//   sview3cText: {
//     color: '#000',
//     textAlign: 'center',
//     fontWeight: '600',
//   },
//   //View 4 Element
//   slogo2: {
//     height: 50,
//     width: 50,
//   },
//   });
  
import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from './Component/Profile';
import { Login } from './Component/Login';
import { Register } from './Component/Register';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
    >
      <Stack.Screen  name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
