import React, { Component } from "react";
import { Text, View,Button } from 'react-native';
import { styles } from '../../../common/styles'



const EstimateScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Estimate Screen
            </Text>
            <Button title="Next" onPress={()=>{
                props.navigation.navigate({
                    routeName:'receivers'
                })
            }}/>
        </View>
    )
}

EstimateScreen.navigationOptions = {

}

export default EstimateScreen;