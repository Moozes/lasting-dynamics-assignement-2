import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./src/screens/login/Login";

const Stack = createNativeStackNavigator();


export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false}} >
                <Stack.Screen name="login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}