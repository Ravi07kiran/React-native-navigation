import React from "react";
import { StyleSheet,View,Text,Button } from "react-native";

export default function Rev({navigation}){
    const pressHandler=()=>{
        navigation.navigate('About');
    }
    return(
       <View style={styles.container}>
        <Text>Info screen</Text>
        <Button title="about" onPress={pressHandler}/>
       </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding:24
    }
});