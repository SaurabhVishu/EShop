import { StyleSheet } from "react-native";
import { SIZES,COLORS,FONTS } from "../../config";
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:SIZES.screenPadding,
        backgroundColor:COLORS.lightGrey,
    },
    upperContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    leftArrowButton:{
        padding:5,
    },
    leftArrow:{
        height:40,
        width:40,
        resizeMode:'contain'
    },
    headingText:{
        ...FONTS.h2,
        color:COLORS.dark,
        paddingLeft:10,
        fontWeight:"bold"
    },
    textHeading:{
        ...FONTS.largeTitle,
        color:COLORS.dark,
        paddingVertical:20,
        fontWeight:"bold"
    },
    phoneContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:COLORS.light,
        borderRadius:SIZES.radius,
        padding:10
    },
    phoneIcon:{
        height:30,
        width:30,
        resizeMode:'contain',
        marginRight:10,
    },
    sendButton:{
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.radius,
        padding:20,
        alignItems:'center',
        justifyContent:'center'
        
    },
    bottomContainer:{
        flex:1, 
        justifyContent:'flex-end'
    },
    buttonText:{
        color:COLORS.secondary,
        fontSize:SIZES.h2,
        fontWeight:'bold'
    }

})

export default styles;