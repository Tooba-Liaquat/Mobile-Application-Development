import React from 'react'
import { View,
     Text,
      StyleSheet,
       TextInput,
       Image ,Touchable,
        TouchableOpacity, 
        Alert } from 'react-native'


/**
* @author
* @function Profile
**/
export const Profile = ({navigation}) => {

const { container } = styles
 return(
  <View>
    <Text style={{fontSize:30,fontFamily:'fantasy',color:'purple'}}>Tooba Liaquat</Text>
  <View style={container}>
  
  <Image style={{height:150,width:150,marginTop:5}} source={{uri:'data:image/png;base64,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'}}></Image>  
  <TextInput style={[styles.Login,{margin:10}]}
  placeholder='Tooba Liaquat'
  keyboardType='name-phone-pad'></TextInput>

  <TextInput style={[styles.Login,{margin:10}]}
  placeholder='tooba8324562gmail.com'
  keyboardType='name-phone-pad'></TextInput>

  <TextInput style={styles.Login}
  placeholder='**********'
  ></TextInput>
  <View><TouchableOpacity style={styles.button}
  //  onPress={() => navigation.goBack()}
  onPress={() => navigation.navigate('Login')}
   >
    <Text style={styles.Text}>    Go back</Text>
  </TouchableOpacity>
  
  </View>
  </View>

  </View>
  )
 }
const styles = StyleSheet.create({
    container: {
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor:'#ffffff',
     height:'100%',
     width:'100%'
    },
    
    View2:{
      marginTop:"2%",    
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center',
      flexDirection:'row'
      
                         
    },
    
    View:{
      marginTop:"2%",    
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center'
      
                         
    },
    Login:{
      height:30,
       width:200,
       padding:10,
       borderColor:'orange',
       borderWidth:3,
       borderRadius:30
  
    },
    Text:{
      fontSize:15,
      fontStyle:'normal',
      margin:10,
      fontFamily:'Yatra-One',
      alignContent:'center',
      justifyContent:'center'
  
  
    },
    button:{
      backgroundColor:'orange',
      height:30,
      width:120,
      marginTop:10,
      borderRadius:20,
      justifyContent:'center',
      alignContent:'center'
    
    }
  
  })