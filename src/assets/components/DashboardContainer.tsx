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
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Extract" component={Extract} />
            <Tab.Screen name="PagoPa" component={PagoPa} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

const s = StyleSheet.create({
    
})