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
            {/* <Button title="About" onPress={()=>{
                props.navigation.navigate({
                    routeName:'About'
                })
            }}/>
            <Button title="Send Money" onPress={()=>{
                props.navigation.navigate({
                    routeName:'SendMoney'
                })
            }}/> */}
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