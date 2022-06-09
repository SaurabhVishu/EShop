import React from "react";
import { View } from "react-native";
import { navigationDataType } from "../models";
import HomeScreen from "../view/home/HomeScreen";


const HomeViewModel=(props:navigationDataType)=>{
    const {navigation}=props
    
    return(
        <HomeScreen {...{navigation}} />
    )
}

export default HomeViewModel

