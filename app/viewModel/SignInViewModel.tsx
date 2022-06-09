import React, { useRef, useState } from "react";
import { View } from "react-native";
import { validation } from "../common";
import { Screens } from "../config";
import { navigationDataType } from "../models";
import SignInScreen from "../view/signIn/SignInScreen";


const SignInViveModel = (props: navigationDataType) => {
    const { navigation } = props

    const [isEnableEye, setIsEnableEye] = useState(false)
    const [Email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [isvalidEmail, setisvalidEmail] = useState(true);
    const [isvalidPassword, setisvalidPassword] = useState(true);

    const email = useRef(false);
    const passwordA = useRef(false);

    const submit = (Email: string, password: string) => {
        email.current = validation.EmailValidate(Email);
        passwordA.current = validation.PasswordValidate(password);
        setisvalidEmail(email.current);
        setisvalidPassword(passwordA.current);
        email.current == true && passwordA.current == true
            ? navigation.navigate(Screens.HOME)
            : null;
    };


    return (
        <SignInScreen {...{
            navigation,
            isvalidEmail,
            isvalidPassword,
            isEnableEye,
            setIsEnableEye,
            emailInput: (text: string) => setEmail(text),
            EnterPassword: (text: string) => setpassword(text),
            submit: () => submit(Email, password),

        }} />
    )
}

export default SignInViveModel

