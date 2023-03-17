// Navigation Libraries.
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Components.
import Splash from "../Screens/Splash";
import Register from "../Screens/Register";
import Login from "../Screens/Login";

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

export default Navigation