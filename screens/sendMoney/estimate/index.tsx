import React, { Component } from "react";
import { Text, View } from 'react-native';
import { styles } from '../../../common/styles'



const EstimateScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Estimate Screen
            </Text>
        </View>
    )
}

EstimateScreen.navigationOptions = {

}

export default EstimateScreen;