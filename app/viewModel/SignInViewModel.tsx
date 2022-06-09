import React from "react";
import { View } from "react-native";
import { navigationDataType } from "../models";
import SignInScreen from "../view/signIn/SignInScreen";


const SignInViveModel=(props:navigationDataType)=>{
    const {navigation}=props
    
    return(
        <SignInScreen {...{navigation}}/>
    )
}

export default SignInViveModel

