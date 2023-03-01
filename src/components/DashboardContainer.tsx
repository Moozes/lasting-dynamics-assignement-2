import { Image, Text } from "native-base";
import { StyleSheet } from "react-native";
import type { ScreenProps } from "../types/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import Extract from "../screens/Extract/Extract";
import PagoPa from "../screens/PagoPa/PagoPa";
import Profile from "../screens/Profile/Profile";
import { getFontStyles } from "../utils/utils";

const houseIcon = require("../assets/icons/house.png");
const houseActiveIcon = require("../assets/icons/house-active.png");
const pagopaIcon = require("../assets/icons/pagopa.png");
const pagopaActiveIcon = require("../assets/icons/pagopa-active.png");
const documentIcon = require("../assets/icons/document.png");
const userIcon = require("../assets/icons/user.png");

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarLabel: ({ children, focused }: any) => (
    <Text style={{ ...getFontStyles(400, 11, 13, focused ? "#7476ED" : "#83828E") }}>
      {children}
    </Text>
  ),
  tabBarStyle: {
    height: 69,
    paddingBottom: 20,
}
};
const homeOptions: any = {
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <Image alt="icon" source={focused ? houseActiveIcon : houseIcon} />
  ),
};
const extractOptions: any = {
  tabBarIcon: () => <Image alt="icon" source={documentIcon} />,
};

const pagopaOptions: any = {
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <Image alt="icon" source={focused ? pagopaActiveIcon : pagopaIcon} />
  ),
};

const profilOptions: any = {
  tabBarIcon: () => <Image alt="icon" source={userIcon} />,
};

type DashboardConainerProps = ScreenProps;
export default function DashboardConainer(props: DashboardConainerProps) {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={homeOptions}
      />
      <Tab.Screen
        name="Extract"
        component={Extract}
        options={extractOptions}
      />
      <Tab.Screen
        name="PagoPa"
        component={PagoPa}
        options={pagopaOptions}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={profilOptions}
      />
    </Tab.Navigator>
  );
}

const s = StyleSheet.create({});
