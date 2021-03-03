import React, { Component } from "react";
import { Text, View,Button } from 'react-native';
import { styles } from '../../common/styles'
import {HeaderButtons,Item} from "react-navigation-header-buttons"
import HeaderButton from '../../components/HeaderButton';
import CameraApp from '../../components/TestComponent'


const HomeScreen = (props: any) => {
    return (
        <CameraApp/>
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