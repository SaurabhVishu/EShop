import React from "react";
import { Image, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { icons } from "../../config";
import styles from "./style";

interface HomeScreenprops {
    navigation: any
}
const HomeScreen = (props: HomeScreenprops) => {
    const { navigation } = props

    return (
        <View style={styles.mainContainer}>
            <View style={styles.firstContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={icons.logo} style={styles.userLogo} />
                        <Text style={styles.headerText}>Home</Text>
                    </View>
                    <View style={styles.headerRightContainer}>
                        {[icons.shoppingBag, icons.notification, icons.shoppingCart].map((item, index) =>
                            <TouchableOpacity>
                                <Image source={item} style={styles.headerIcons} />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <Image source={icons.search}
                        style={styles.searchIcons} />
                    <TextInput placeholder="Search Product" />
                </View>

            </View>
            <View style={styles.secondContainer}>
 {/* This is the For Testing */}
            </View>

        </View>
    )
}

export default HomeScreen

