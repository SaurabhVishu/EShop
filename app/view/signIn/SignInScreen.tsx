import React from 'react';
import {
    Button,
    Image,
    SafeAreaView,
    Text,
    TextInput,
    Touchable,
    TouchableOpacity,
    View,
} from 'react-native';
import { constants, icons } from '../../config';
import styles from './style';

interface SignInScreenprops {
    navigation: any
    isvalidEmail: boolean
    isvalidPassword: boolean
    isEnableEye: boolean
    setIsEnableEye: React.Dispatch<React.SetStateAction<boolean>>
    emailInput:  (text: string) => void;
    EnterPassword: (Text: string) => void
    submit: () => void

}
const SignInScreen = (props: SignInScreenprops) => {
    const {
        navigation,
        isvalidEmail,
        isvalidPassword,
        isEnableEye,
        emailInput,
        EnterPassword,
        submit,
        setIsEnableEye
    } = props;

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                <Image source={icons.logo} style={styles.logo} />
                <View style={styles.boxContainer}>
                    <Text style={styles.headingText}>
                        {constants.screensData.Signin.SIGN_IN_TEXT}
                    </Text>

                    <View style={styles.inputContainer}>
                        <Image source={icons.email} style={styles.formIcons} />
                        <TextInput
                            placeholder={constants.FormInput.EMAIL}
                            style={styles.textInputStyle}
                            onChangeText={(Text) => emailInput(Text)}
                        />
                    </View>
                    {!isvalidEmail &&
                        <Text style={styles.invalidText}>
                            {constants.FormInput.validation.EMAILVALIDATION}
                        </Text>
                    }
                    <View style={styles.inputPasswordContainer}>
                        <View style={styles.row}>
                            <Image source={icons.lock} style={styles.formIcons} />
                            <TextInput
                                placeholder={constants.FormInput.PASSWORD}
                                style={styles.textInputStyle}
                                secureTextEntry={!isEnableEye}
                                onChangeText={(Text) => EnterPassword(Text)}
                            />
                        </View>
                        <TouchableOpacity  onPress={() => (setIsEnableEye(!isEnableEye))}>
                        <Image source={isEnableEye?icons.eye:icons.eye_off} style={styles.formIcons} />
                        </TouchableOpacity>
                    </View>
                    {!isvalidPassword &&
                        <Text style={styles.invalidText}>
                            {constants.FormInput.validation.PASSWORDVALIDATION}
                        </Text>
                    }

                    <TouchableOpacity>
                        <Text style={styles.forgetPasswordText}>
                            {constants.FormInput.FORGET_PASSWORD}?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton}
                        onPress={submit}
                    >
                        <Text style={styles.loginText}>{constants.button.LOG_IN}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signUpTextContainer}>
                    <Text style={styles.textStyle}>{constants.screensData.Signin.DONT_HAVE_AN_ACCOUNT}</Text>
                    <Text style={styles.forgetPasswordText}>{constants.button.CREATE_NEW_ACCOUNT}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.otherOptions}>OR Login with</Text>

                <View style={styles.socialButtonContainer}>
                    {[icons.twitter, icons.google, icons.linkedin].map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.socialButton}>
                                <Image source={item} style={styles.sociallogo} />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignInScreen;
