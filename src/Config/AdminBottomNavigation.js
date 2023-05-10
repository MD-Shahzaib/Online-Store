// Bottom-Tab-Navigator.
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
            />
            <Tab.Screen
                name="AdminAddItem"
                component={AdminAddItem}
            />
            <Tab.Screen
                name="AdminAccount"
                component={AdminAccount}
            />
        </Tab.Navigator>
    )
}

export default AdminBottomNavigation;