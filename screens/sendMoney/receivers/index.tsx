import React, { Component } from "react";
import { Text, View,Button } from 'react-native';
import { styles } from '../../../common/styles'



const ReceiversScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Receiver Screen
            </Text>
            <Button title="Next" onPress={()=>{
                props.navigation.navigate({
                    routeName:'payment'
                })
            }}/>
        </View>
    )
}



export default ReceiversScreen;