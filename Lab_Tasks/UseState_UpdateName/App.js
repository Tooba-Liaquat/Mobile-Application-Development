
import React from "react";
import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity,handlerLongClick, handlerClick } 
from 'react-native-web/dist/index'

class App extends React.Component {
///
// handlerLongClick  () {
//   //handler for Long Click
//   alert('Button Long Pressed');
// };
// handlerClick ()  {
//   //handler for Long Click
//   alert('Button Long Pressed');
//   Name1.keyup(function(){
//     phonetex.val(this.value);
//   });
// };
////
  constructor() {
    super();
    this.state = {
      Name1: "tooba",
      phone1: "03235707085",
      Name2: "Fatima",
      phone2: "03215986212",
      Name3: "irsa",
      phone3: "0321570730704",
    }
  }
  Updatename(){
 var namx= this.state.nametex
 var phox=this.state.phonetex
 if(this.state.phone1===phox){
 this.setState({
Name1: namx
 }) 
 }
 if(this.state.phone2===phox){
  this.setState({
 Name2: namx
  })}
  if(this.state.phone3===phox){
    this.setState({
   Name3: namx
    })
  }}
  render() {
    return (
      <View style={styles.maincontainer}>
        <TouchableOpacity
          onLongPress={()=>{this.handlerLongClick()}}
          onPress={()=>{this.handlerClick()}}
          activeOpacity={0.6}
          style={styles.buttonStyle}>
          <Text style={{ borderWidth: 1, width: "20ch", marginBottom: 4, marginTop: 4 }}>{this.state.Name1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onLongPress={handlerLongClick}
          onPress={handlerClick}
          activeOpacity={0.6}
          style={styles.buttonStyle}>
          <Text style={{ borderWidth: 1, width: "20ch", marginBottom: 4, marginTop: 4 }}>{this.state.Name2}</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onLongPress={handlerLongClick}
          onPress={handlerClick}
          activeOpacity={0.6}
          style={styles.buttonStyle}>
          <Text style={{ borderWidth: 1, width: "20ch", marginBottom: 4, marginTop: 4 }}>{this.state.Name3}</Text>
          </TouchableOpacity>
        <View>
          <TextInput style={styles.inputstyle} onChangeText={(e)=>{this.setState({nametex:e})}} autoCapatilize="none" autoCorrect={false}></TextInput>
          <TextInput style={styles.inputstyle} onChangeText={(c)=>{this.setState({phonetex:c})}} autoCapatilize="none" autoCorrect={false}></TextInput>
        <Button title="Edit" onPress={()=>{this.Updatename()}} style={{width:"25ch", borderColor:1, backgroundColor: "rgb(0, 139, 255)" }}></Button>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  maincontainer:
  {
    flex: 1,
    fontSize: 14,
    justifyContent: "center",
    marginLeft: "45%",
    AlignItems: "center"
  },
  inputstyle: {
    borderWidth: 1,
    width: "25ch",
    margintop: 4,
    marginBottom: 4,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: "regular",
    fontSize: 18,
  },

})
export default App;
