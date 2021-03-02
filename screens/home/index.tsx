import React, { Component } from "react";
import { Text, View,Button } from 'react-native';
import { styles } from '../../common/styles'



const HomeScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Home Screen
            </Text>
            <Button title="About" onPress={()=>{
                props.navigation.navigate({
                    routeName:'About'
                })
            }}/>
            <Button title="Send Money" onPress={()=>{
                props.navigation.navigate({
                    routeName:'SendMoney'
                })
            }}/>
        </View>
    )
}



export default HomeScreen;