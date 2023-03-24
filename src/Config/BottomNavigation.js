import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// Components.
import Home from "../Screens/Home";
import Cart from "../Screens/Cart";
import Account from "../Screens/Account";

// Methods.
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Ionicons
                            name="home"
                            color="black"
                            size={30}
                        />
                    }
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return <MaterialIcons
                            name="shopping-cart"
                            color="black"
                            size={30}
                        />
                    }
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return <MaterialCommunityIcons
                            name="account-circle"
                            color="black"
                            size={30}
                        />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation;