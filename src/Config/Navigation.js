// Navigation Libraries.
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens.
import Splash from "../Screens/Splash";
import Register from "../Screens/Register";
import Login from "../Screens/Login";
import BottomNavigation from "./BottomNavigation";
import AdminBottomNavigation from "./AdminBottomNavigation";

const Navigation = () => {

    // Methods.
    const Stack = createNativeStackNavigator();

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='Splash'
                        component={Splash}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Register'
                        component={Register}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Login'
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='BottomNavigation'
                        component={BottomNavigation}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='AdminBottomNavigation'
                        component={AdminBottomNavigation}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
};

export default Navigation;