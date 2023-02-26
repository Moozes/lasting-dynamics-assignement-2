import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import type { ScreenProps } from "../../types/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/home/Home";
import Extract from "../../screens/extract/Extract";
import PagoPa from "../../screens/pagopa/PagoPa";
import Profile from "../../screens/profile/Profile";

const Tab = createBottomTabNavigator();


type DashboardConainerProps = ScreenProps
export default function DashboardConainer(props: DashboardConainerProps) {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}} >
            <Tab.Screen name="Home" component={Home}  options={{
                // tabBarIcon: () => <Text>h</Text>,
                // tabBarStyle: {
                //     paddingBottom: 20,
                //     height: 69,
                // },
                // tabBarIconStyle: {
                //     paddingBottom: 5
                // },
                // tabBarItemStyle: {
                //     backgroundColor: "red",
                //     paddingTop: 8,
                //     borderTopWidth: 1,
                //     borderTopColor: "blue"
                // },
                // tabBarLabel: "hooome",
                // tabBarInactiveTintColor: "red",
                // tabBarInactiveBackgroundColor: "green",
                // tabBarActiveTintColor: "violet",
                // tabBarLabelStyle: {
                //     fontSize: 20
                // }
            }} />
            <Tab.Screen name="Extract" component={Extract} />
            <Tab.Screen name="PagoPa" component={PagoPa} />
            <Tab.Screen name="Profile" component={Profile}  />
        </Tab.Navigator>
    )
}

const s = StyleSheet.create({
    
})