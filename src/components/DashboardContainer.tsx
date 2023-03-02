import { Image, Text } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@src/screens/Home/Home";
import Extract from "@src/screens/Extract/Extract";
import PagoPa from "@src/screens/PagoPa/PagoPa";
import Profile from "@src/screens/Profile/Profile";
import { getFontStyles } from "@src/utils/utils";
import { colors } from "@src/themes/colors";

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
    <Text
      style={{
        ...getFontStyles(
          400,
          11,
          13,
          focused ? colors.primary.default : colors.neutral["40"]
        ),
      }}
    >
      {children}
    </Text>
  ),
  tabBarStyle: {
    height: 69,
    paddingBottom: 20,
  },
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

export default function DashboardConainer() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} options={homeOptions} />
      <Tab.Screen name="Extract" component={Extract} options={extractOptions} />
      <Tab.Screen name="PagoPa" component={PagoPa} options={pagopaOptions} />
      <Tab.Screen name="Profile" component={Profile} options={profilOptions} />
    </Tab.Navigator>
  );
}
