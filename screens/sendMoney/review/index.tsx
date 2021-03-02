import React, { Component } from "react";
import { Text, View ,Button} from 'react-native';
import { styles } from '../../../common/styles'



const ReviewScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Review Screen
            </Text>
            <Button title="Submit" onPress={()=>{
                props.navigation.navigate({
                    routeName:'receipt'
                })
            }}/>
        </View>
    )
}



export default ReviewScreen;