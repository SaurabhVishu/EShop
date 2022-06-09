import React from 'react';
import {
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
    navigation: any;
}
const SignInScreen = (props: SignInScreenprops) => {
    const { navigation } = props;

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                <Image source={icons.logo} style={styles.logo} />
                <View style={styles.boxContainer}>
                    <Text style={styles.headingText}>
                        {constants.ScreensData.Signin.SIGN_IN_TEXT}
                    </Text>

                    <View style={styles.inputContainer}>
                        <Image source={icons.email} style={styles.formIcons} />
                        <TextInput
                            placeholder={constants.FormInput.EMAIL}
                            style={styles.textInputStyle}
                        />
                    </View>
                    <View style={styles.inputPasswordContainer}>
                        <View style={styles.row}>
                            <Image source={icons.lock} style={styles.formIcons} />
                            <TextInput
                                placeholder={constants.FormInput.PASSWORD}
                                style={styles.textInputStyle}
                            />
                        </View>
                        <Image source={icons.eye} style={styles.formIcons} />
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.forgetPasswordText}>
                            {constants.FormInput.FORGET_PASSWORD}?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}>{constants.button.LOG_IN}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signUpTextContainer}>
                    <Text style={styles.textStyle}>{constants.ScreensData.Signin.DONT_HAVE_AN_ACCOUNT}</Text>
                    <Text style={styles.forgetPasswordText}></Text>
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
