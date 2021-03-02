import React, { Component } from "react";
import { Text, View,Button } from 'react-native';
import { styles } from '../../../common/styles'



const ReceiptScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Receipt Screen
            </Text>
            <Button title="Home" onPress={()=>{
                // props.navigation.navigate('Root',{
                //     screen:'Home'
                // })
                console.log(props.navigation)
                props.navigation.popToTop();
                props.navigation.goBack(null);
            }}/>
        </View>
    )
}



export default ReceiptScreen;