import React, { Component } from "react";
import { Text, View } from 'react-native';
import { styles } from '../../../common/styles'



const ReviewScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Review Screen
            </Text>
        </View>
    )
}



export default ReviewScreen;