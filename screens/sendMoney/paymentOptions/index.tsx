import React, { Component } from "react";
import { Text, View } from 'react-native';
import { styles } from '../../../common/styles'



const PaymentScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Payment Options Screen
            </Text>
        </View>
    )
}


export default PaymentScreen;