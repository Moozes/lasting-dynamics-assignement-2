import { Image, Text } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@src/screens/Home/Home";
import Extract from "@src/screens/Extract/Extract";
import PagoPa from "@src/screens/PagoPa/PagoPa";
import Profile from "@src/screens/Profile/Profile";
import { getFontStyles } from "@src/utils/utils";
import { colors } from "@src/themes/colors";
import HouseIcon from "@src/assets/icons/house.svg";
import DocumentIcon from "@src/assets/icons/document.svg";
import UserIcon from "@src/assets/icons/user.svg";
import PagopaIcon from "@src/assets/icons/pagopa.svg";

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
    <HouseIcon fill={focused ? colors.primary.default : colors.neutral["40"]} />
  ),
};
const extractOptions: any = {
  tabBarIcon: ({ focused }: { focused: boolean }) => <DocumentIcon fill={focused ? colors.primary.default : colors.neutral["40"]} />,
};

const pagopaOptions: any = {
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <PagopaIcon fill={focused ? colors.primary.default : colors.neutral["40"]} />
  ),
};

const profilOptions: any = {
  tabBarIcon: ({ focused }: { focused: boolean }) => <UserIcon fill={focused ? colors.primary.default : colors.neutral["40"]} />,
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
