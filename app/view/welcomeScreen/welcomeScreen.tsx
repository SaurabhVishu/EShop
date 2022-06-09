import React from "react";
import {View, Text, Image} from 'react-native';
import styles from "./style";
import { icons,constants, COLORS } from "../../config";
import { Button } from "../../components";

const WelcomeScreen = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                source={icons.logo} style={styles.logoImage} />
                <Text style={styles.headingText}>{constants.screensData.welcomeScreen.welcomeText}</Text>
            </View>
            <View style={styles.lowerContainer}>
            <Button
                onPress={() => undefined} buttonText={constants.screensData.welcomeScreen.getStarted} 
                buttonColor={COLORS.primary} textColor={COLORS.secondary}            
            
            />
                <Button
                onPress={() => undefined} buttonText={constants.screensData.welcomeScreen.alreadyHaveAccount} 
                buttonColor={COLORS.lightGrey} textColor={COLORS.primary}            
            
            />
            </View>
        </View>
    )
}
export default WelcomeScreen;