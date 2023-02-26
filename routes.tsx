import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Text } from "native-base";
import { ScreenStackHeaderConfig } from "react-native-screens";

const Stack = createNativeStackNavigator();

function Home() {
    return <View><Text>login page</Text></View>
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false}} >
                <Stack.Screen name="login" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}