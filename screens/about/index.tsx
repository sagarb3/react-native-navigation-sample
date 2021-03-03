import React from "react";
import { Text, View,Button } from 'react-native';
import { styles } from '../../common/styles'
import TestComponet from '../../components/TestComponent'


const AboutScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                About Screen
            </Text>
           <TestComponet/>
        </View>
    )
}



export default AboutScreen;