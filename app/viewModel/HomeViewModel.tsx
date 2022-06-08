import React from "react";
import { View } from "react-native";
import HomeScreen from "../view/home/HomeScreen";

interface HomeViewModelprops{
    navigation:any
}
const HomeViewModel=(props:HomeViewModelprops)=>{
    const {navigation}=props
    
    return(
        <HomeScreen {...{navigation}} />
    )
}

export default HomeViewModel

