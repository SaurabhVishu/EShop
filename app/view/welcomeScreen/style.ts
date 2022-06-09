import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from "../../config";

const {width,height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:SIZES.screenPadding,
        backgroundColor:COLORS.lightGrey,
    },

    logoImage:{
        resizeMode:'contain',
        height:width*0.8,
        width:height*0.8,
    },
    innerContainer:{
        alignItems:'center',
        // justifyContent:'center',
    },
    lowerContainer:{
        flex:1,
        justifyContent:'flex-end'
    },
    headingText:{
        ...FONTS.largeTitle,
        color:COLORS.dark,
        paddingLeft:10,
        fontWeight:"bold",
        textAlign:'center'
    }
})

export default styles;