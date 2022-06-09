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
        marginVertical:5,
    
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
        marginTop:5
    },
    cardView:{
        backgroundColor:"white",
        padding:15,
        borderRadius:8,
        marginVertical:10
    },
textView:{
        backgroundColor:COLORS.lightGrey,
        borderRadius:8,
        marginVertical:8,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
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
        marginVertical:10
    },
})

export default styles
