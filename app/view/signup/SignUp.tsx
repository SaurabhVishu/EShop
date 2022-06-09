import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {constants, icons} from '../../config';
import styles from './Style';

interface Inputprop {
  navigation: any;
  Screendata: {
    id: number;
    placeholder: string;
    icon: any;
    rightIcon: any;
  }[];
}

const SignUpScreen = (props: Inputprop) => {
  const {navigation, Screendata} = props;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image source={icons.logo} style={styles.logo} />
      </View>
      <View style={styles.cardView}>
        <Text style={styles.mainHeading}>
          {constants.screensData.signUpScreen.createNew}
        </Text>
        <Text style={styles.mainHeading}>
          {constants.screensData.signUpScreen.account}
        </Text>
        <View style={styles.mapContainer}>
          {Screendata.map((item, index) => {
            return (
              <View style={styles.textView}>
            
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    {index != 3 && (
                      <Image style={styles.textInputIcon} source={item.icon} />
                    )}
                    <TextInput
                      placeholder={item.placeholder}
                      style={styles.placeholder}
                    />
                    </View>
                  {index >= 3 && (
                      <TouchableOpacity>
                        <Image
                          style={styles.textInputIcon}
                          source={item.rightIcon}
                        />
                      </TouchableOpacity>
                    )}
              </View>
            );
          })}
        </View>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <TouchableOpacity style={{height:20,width:20,borderRadius:5,borderColor:"grey",borderWidth:2,marginRight:5}}/>
        <Text>{constants.screensData.signUpScreen.description}</Text>
        </View> 
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
