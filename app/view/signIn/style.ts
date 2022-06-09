import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    justifyContent:"space-between"
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  boxContainer: {
    margin: 20,
    padding: 20,
    elevation: 20,
    backgroundColor: COLORS.light,
    borderRadius:20
  },
  headingText: {
    fontSize: FONTS.h1.fontSize,
    width: 200,
    fontWeight:"bold",
    color:COLORS.dark,
    marginBottom:20
  },
  inputContainer:{
      backgroundColor:COLORS.lightGrey,
      borderRadius:20,
      marginBottom:20,
      padding:10,
      flexDirection:"row",
      alignItems:'center'
      
  },
  formIcons:{
      width:40,
      height:40,
      resizeMode:"contain"
  },
  textInputStyle:{
      fontSize:20
  },
  row:{
      flexDirection:
      "row"
  },
  inputPasswordContainer:{
    backgroundColor:COLORS.lightGrey,
    borderRadius:20,
    padding:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
    
  },
  forgetPasswordText:{
      fontSize:FONTS.body3.fontSize,
      alignSelf:"flex-end",
      marginVertical:10,
      fontWeight:"bold",
      color:COLORS.secondary,
  },
  loginButton:{
      backgroundColor:COLORS.primary60,
      padding:20,
      borderRadius:10,
      alignItems:"center"
  },
  loginText:{
      fontSize:FONTS.body3.fontSize,
      fontWeight:"bold",
      color:COLORS.light
  },
  signUpTextContainer:{
      flexDirection:"row",
      alignSelf:"center",
      alignItems:"center"
  },
  sociallogo:{
      height:40,
      width:40,
      resizeMode:"contain",
      tintColor:COLORS.dark
  },
  otherOptions:{
    alignSelf:"center",
    fontSize:20,
    color:COLORS.dark
  },
  socialButtonContainer:{
      flexDirection:"row",
      alignSelf:"center",
      marginVertical:10
  },
  socialButton:{
    padding:15,
    backgroundColor:"lightgray",
    borderRadius:10,marginRight:10
  },
  textStyle:{
      fontSize:17,
      marginRight:10
  },
  invalidText:{
    color: COLORS.error,
    ...FONTS.body5
  }
});

export default styles;
