import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from './style';

interface InputProps{
    onPress:any;
    buttonText:string;
    buttonColor:string;
    textColor:string;
}
const Button=(props:InputProps)=>{
    const {
        onPress,
        buttonText,
        buttonColor,
        textColor
    }=props
    
    return(
       <TouchableOpacity onPress={()=>onPress()} style={[styles.button,{backgroundColor:buttonColor}]} >
           <Text style={[styles.text, {color:textColor}]}>{buttonText}</Text>
       </TouchableOpacity>
    )
}

export default Button;

