import React from "react";
import { View } from "react-native";
import SignInScreen from "../view/signIn/SignInViewModel";

interface SignInViveModelprops{
    navigation:any
}
const SignInViveModel=(props:SignInViveModelprops)=>{
    const {navigation}=props
    
    return(
        <SignInScreen {...{navigation}}/>
    )
}

export default SignInViveModel

