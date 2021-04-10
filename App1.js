import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default function App1(){
    const[txt,setTxt]=useState("")
    const changetext=(t)=>{
        setTxt(t)
    }
    return(
        <View>
           
            <TextInput
           style={{width:300}}
           placeholder="Enter some text"
           value={txt}
           onChangeText={changetext}
           />
        </View>
    )
}
const styles=StyleSheet.create({
    
})