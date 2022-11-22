import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props){
 return(
    <View style={styles.card}>
        <View style={styles.cardcontent}>
            {props.children}
        </View>
    </View>
 )
}
const styles= StyleSheet.create({
    card:{
    borderRadius:4,
    
    elevation:3,
    backgroundColor:'#ffff',
    shadowOffset:{width:1,height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    marginHorizontal:0,
    marginVertical:20,
    padding:50

    
    
    },
    cardcontent:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:2
    }
});