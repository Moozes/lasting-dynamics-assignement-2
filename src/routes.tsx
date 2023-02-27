import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./screens/login/Login";
import DashboardConainer from "./components/DashboardContainer";
import PaymentDetails from "./screens/payment-details/PaymentDetails";

const Stack = createNativeStackNavigator();


export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false}} >
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="dashboard" component={DashboardConainer} />
                <Stack.Screen name="payment-details" component={PaymentDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}