import React, { Component } from "react";
import { Text, View,Button } from 'react-native';
import { styles } from '../../../common/styles'



const PaymentScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Payment Options Screen
            </Text>
            <Button title="Next" onPress={()=>{
                props.navigation.navigate({
                    routeName:'review'
                })
            }}/>
        </View>
    )
}


export default PaymentScreen;