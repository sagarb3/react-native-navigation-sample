import React from "react";
import { Text, View,Button } from 'react-native';
import { styles } from '../../common/styles'



const AboutScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                About Screen
            </Text>
            <Button title="Home" onPress={()=>{
                props.navigation.navigate({
                    routeName:'Home'
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



export default AboutScreen;