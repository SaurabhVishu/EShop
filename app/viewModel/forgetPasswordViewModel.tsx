import React from "react";
import ForgetPasswordScreen from "../view/forgetPasswordScreen/forgetPasswordScreen";
interface InputProps{
    navigation:any;
}
const ForgetPasswordViewModel = (props:InputProps) =>{
    const{
        navigation
    } = props;

    return(
    <ForgetPasswordScreen
    navigation={navigation}/>
)}

export default ForgetPasswordViewModel;