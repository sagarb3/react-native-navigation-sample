import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from 'react-navigation';
import AboutScreen from "../screens/about";
import HomeScreen from '../screens/home';
import SendMoneyScreen from "../screens/sendMoney";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import EstimateScreen from '../screens/sendMoney/estimate';
import PaymentScreen from '../screens/sendMoney/paymentOptions';
import ReceiptScreen from '../screens/sendMoney/receipt';
import ReceiversScreen from '../screens/sendMoney/receivers';
import { create } from "react-test-renderer";

const sendMoneyNavigation = createBottomTabNavigator({
    Estimate: EstimateScreen,
    Payment: PaymentScreen,
    Receipt: ReceiptScreen,
    Receiver: ReceiversScreen
}, {
    tabBarOptions: {
        activeTintColor: 'orange'
    }
})

// const BaseNavigation = createStackNavigator({
//     Home: HomeScreen,
//     About: AboutScreen,
//     SendMoney: sendMoneyNavigation
// });

const BaseDrawerNavigator = createBottomTabNavigator({
    Home:HomeScreen,
    About:AboutScreen,
    SendMoney: sendMoneyNavigation
})

export default createAppContainer(BaseDrawerNavigator);