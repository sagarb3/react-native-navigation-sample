import React, { Component } from "react";
import { Text, View } from 'react-native';
import { styles } from '../../../common/styles'



const ReceiptScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Receipt Screen
            </Text>
        </View>
    )
}



export default ReceiptScreen;