import React from "react"
import{View,Text,SafeAreaView } from "react-native"
import { constants } from "../config"
import SignUpScreen from "../view/signup/SignUp"


interface Inputprop{
    navigation:any
}

const SignUpViewModel=(props:Inputprop)=>{
    const {navigation}=props
    return(
         <SignUpScreen
         {...{
             navigation,
             Screendata:constants.signupdata
         }}
         />
    )
}

export default SignUpViewModel