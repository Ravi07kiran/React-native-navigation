import React from "react";
import { StyleSheet,View,Text,Button,TouchableOpacity,Image } from "react-native";
import Card from "../shared/card";

export default function Home({navigation}){
 const pressHandler = () =>{
    navigation.navigate('Info');
 }
 const press = () =>{
  navigation.navigate('About');
}
    
    return(
       <View style={styles.container}>
        <Text>home</Text>
        <Button title="About" onPress={press}/>
        <Button title="Info" onPress={pressHandler}/>
        <View>
        
        </View>
       
        <TouchableOpacity>
            
            <Card>
            <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://www.bing.com/th/id/OGC.02ff1dd098c486e57956bcf746301e6f?pid=1.7&rurl=https%3a%2f%2fmir-s3-cdn-cf.behance.net%2fproject_modules%2fmax_1200%2f09a56674244811.5c27fd8c99e0c.gif&ehk=KFgTlBa0u7FVSuf5vxJq5QIT8YjJprUYBshF%2b9Mq8pE%3d',
        }}
      />
            </Card>
        </TouchableOpacity>
       

        
       </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding:24
    },
    tinyLogo: {
        width: 250,
        height: 250,
        justifyContent: 'center',
        alignItems:'center',
        
        
      },
});