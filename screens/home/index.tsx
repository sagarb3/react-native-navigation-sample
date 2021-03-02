import React, { Component } from "react";
import { Text, View,Button } from 'react-native';
import { styles } from '../../common/styles'
import {HeaderButtons,Item} from "react-navigation-header-buttons"
import HeaderButton from '../../components/HeaderButton'


const HomeScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Home Screen
            </Text>
        </View>
    )
}


// HomeScreen.navigationOptions = (navData:any)=>{
//     return  {
//         headerTitle:"App",
//         headerLeft:(
//             <HeaderButtons HeaderButtonComponent={HeaderButton}>
//                 <Item
//                 title="Menu"
//                 iconName="ios-menu"
//                 onPress={()=>{
//                     navData.navigation.toggleDrawer()
//                 }}
//                 />
//             </HeaderButtons>
//         )
//     }
// }


export default HomeScreen;