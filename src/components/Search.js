import { Text, View } from "react-native";
import { TextInput, StyleSheet } from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import { useState } from "react";
export default function Search(props) {
    const [input, setInput] = useState("")
 return (
    
    <View style={[styles.container,styles.elevation]}>
       <FontAwesome name='search' size={25}></FontAwesome>
       <Text>{input}</Text>
      <TextInput style={styles.input} placeholder="Restaurants,food" onChangeText={(text)=>setInput(text)} value={input} onEndEditing={()=>{props.setTerm(input);setInput("")}}></TextInput>
    </View>
 );   
}

const styles=StyleSheet.create({
    container:{flexDirection:"row",
    marginHorizontal:25,
    marginTop:5,
    padding:15,
    backgroundColor:"white"},
    elevation:{  shadowColor:"black",
    
    shadowOffset:{width: 5,height: 5},
    shadowOpacity:0.7,
    elevation:7,
    marginBottom:5,
borderRadius:40},
  
input:{
    fontSize:20,
    marginLeft:10
}
})