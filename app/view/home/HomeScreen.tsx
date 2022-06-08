import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

interface HomeScreenprops{
    navigation:any
}
const HomeScreen=(props:HomeScreenprops)=>{
    const {navigation}=props
    
    return(
        <View style={styles.mainContainer}>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

