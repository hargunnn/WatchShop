import React from "react";
import { Image, StyleSheet } from "react-native";

const AppIcon=()=>{
    return(
        <Image style={styles.image} source={require('../images/watch1.png')}/>
    );
}
 
export default AppIcon;
const styles=StyleSheet.create({
    image: {
        marginBottom: 40,
        height: 100,
        width: 100,
         borderRadius: 20
    },
 });