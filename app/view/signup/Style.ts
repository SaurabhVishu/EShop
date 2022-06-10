import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from '../../config/theme';

const  styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.lightGrey,
        padding:20
    },
    logoContainer:{
        alignItems:"center",
    
    },
    logo:{
        height:80,
        width:80,
        resizeMode:"contain",
    
    },
    mainHeading:{
        fontSize:SIZES.h1,
        fontWeight:"bold",
        color:"black",
        //marginTop:5
    },
    cardView:{
        backgroundColor:"white",
        padding:20,
        borderRadius:8,
        elevation: 20,
       // marginVertical:10
    },
    signInText:{
        fontSize:15,
        color:COLORS.support1
    },
textView:{
        backgroundColor:COLORS.lightGrey,
        borderRadius:8,
        marginVertical:8,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textInputContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    textInputIcon:{
        height:25,
        width:25,
        marginHorizontal:8
    },
    placeholder:{
        fontSize:15
    },
    mapContainer:{
       // marginVertical:10
    },
    clickBoxContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    clickBox:{
        height:20,
        width:20,
        borderRadius:5,
        borderColor:"grey",
        borderWidth:2,
        marginRight:5
    },
    crateAcountButton:{
        backgroundColor:COLORS.primary60,
        padding:18,
        borderRadius:10,
        alignItems:"center"
    },
    createAccountText:{
        fontSize:FONTS.body3.fontSize,
        fontWeight:"bold",
        color:COLORS.light
    },
})

export default styles
