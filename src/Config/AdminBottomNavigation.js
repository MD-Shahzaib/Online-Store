// Bottom-Tab-Navigator.
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Icons.
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// Components.
import AdminHome from "../Screens/AdminHome";
import AdminAddItem from "../Screens/AdminAddItem";
import AdminAccount from "../Screens/AdminAccount";
import AdminOrders from "../Screens/AdminOrders";

// Methods.
const Tab = createBottomTabNavigator();

const AdminBottomNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="AdminHome"
                component={AdminHome}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return <FontAwesome
                            name="home"
                            color="black"
                            size={30}
                        />
                    }
                }}
            />
            <Tab.Screen
                name="AdminAddItem"
                component={AdminAddItem}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Ionicons
                            name="add-circle-outline"
                            color="black"
                            size={30}
                        />
                    }
                }}
            />
            <Tab.Screen
                name="AdminAccount"
                component={AdminAccount}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return <MaterialIcons
                            name="account-circle"
                            color="black"
                            size={30}
                        />
                    }
                }}
            />
            <Tab.Screen
                name="AdminOrders"
                component={AdminOrders}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return <MaterialIcons
                            name="list-alt"
                            color="black"
                            size={30}
                        />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default AdminBottomNavigation;