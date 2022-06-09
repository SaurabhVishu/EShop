import React from "react";
import {Image, SafeAreaView, Text , TextInput, TouchableOpacity, View} from 'react-native';
import { icons,constants, COLORS } from "../../config";
import styles from "./style";
import {Button} from '../../components'

interface InputProps{
    navigation:any;
}
const ForgetPasswordScreen = (props:InputProps)=>{
    const{
        navigation
    } = props;
return(
    <SafeAreaView style = {styles.container}>
        <View style={styles.upperContainer}>
            <TouchableOpacity>
                <Image source={icons.arrow_left} 
                style={styles.leftArrow}
                />
            </TouchableOpacity>
            <Text style={styles.headingText}>{constants.screensData.forgetPassword.forgetPassword}</Text>
        </View>
        <Text style={styles.textHeading}>{constants.screensData.forgetPassword.continueUsingPhoneNumber}</Text>
        <View style={styles.phoneContainer}>
            <Image source={icons.phone} style={styles.phoneIcon}/>
            <TextInput
            placeholder="Phone"
            />
        </View>
        <View style={styles.bottomContainer}>
       
        <Button
                buttonText={constants.screensData.forgetPassword.sendVerificationCode}
                buttonColor={COLORS.primary} onPress={()=>undefined}
               textColor={COLORS.secondary}
            />
        </View>
    </SafeAreaView>
)

}
export default ForgetPasswordScreen;