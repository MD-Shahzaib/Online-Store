// Navigation Libraries.
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer"

// Components.
import Splash from "../Screens/Splash";
import Register from "../Screens/Register";
import Login from "../Screens/Login";
import Home from "../Screens/Home";

// Methods.
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator()

const Navigation = () => {
    return (
        <>
            <NavigationContainer>
                {/* <Drawer.Navigator>
                    <Drawer.Screen
                        name="Splash"
                        component={Splash}
                    // options={{ headerShown: true }}
                    />
                    <Drawer.Screen
                        name="Home"
                        component={Home}
                    />
                    <Drawer.Screen
                        name="Register"
                        component={Register}
                    />
                    <Drawer.Screen
                        name="Login"
                        component={Login}
                    />
                </Drawer.Navigator> */}

                <Stack.Navigator>
                    <Stack.Screen
                        name='Splash'
                        component={Splash}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Home'
                        component={Home}
                    />
                    <Stack.Screen
                        name='Register'
                        component={Register}
                    />
                    <Stack.Screen
                        name='Login'
                        component={Login}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Navigation;

/*
// Navigation Libraries.
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Components.
import Splash from "../Screens/Splash";
import Register from "../Screens/Register";
import Login from "../Screens/Login";
import Home from "../Screens/Home";

// Methods.
const Stack = createNativeStackNavigator();

const Navigation = () => {
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
                    name='Home'
                    component={Home}
                    />
                    <Stack.Screen
                    name='Register'
                    component={Register}
                    />
                    <Stack.Screen
                    name='Login'
                    component={Login}
                    />
                    </Stack.Navigator>
                    </NavigationContainer>
                    </>
                    )
                }

export default Navigation;
*/
