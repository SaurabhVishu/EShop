import { StyleSheet } from "react-native";
import { SIZES } from "../../config";

const  styles=StyleSheet.create({
  button:{
    borderRadius:SIZES.radius,
    padding:20,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize:SIZES.h2,
    fontWeight:'bold'
  }
})

export default styles