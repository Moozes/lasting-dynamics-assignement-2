import { StyleSheet } from "react-native";
import { ScreenProps } from "../../types/types";
import { Text, View, ScrollView, StatusBar, Heading, Image } from "native-base";
import { getFontStyles } from "../../utils/utils";
import UserCard from "./components/UserCard";
import Contributions from "./components/Contributions";
import useUserData from "./hooks/useUserData";
import { ActivityIndicator } from "react-native";
import Header from "../../components/Header";

type HomeProps = ScreenProps;
export default function Home(props: HomeProps) {
  const { loading } = useUserData();

  return (
    <ScrollView style={s.container} >
      <StatusBar hidden  backgroundColor="#7476ED"  barStyle="light-content" />
      <Header bgColor="#7476ED"/>
      <View style={s.hero}>
        <Heading style={s.heroHeading}>Hello, John S.</Heading>
        <Text style={s.heroText}>Welcome in Moneylia</Text>
      </View>
      {loading ? (
        <ActivityIndicator style={s.spinner} size="large" />
      ) : (
        <View style={s.content}>
          <UserCard style={s.userCard} />
          <Contributions />
        </View>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: {
  },
  hero: {
    backgroundColor: "#7476ED",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 139,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  heroHeading: {
    ...getFontStyles(400, 32, 38, "white"),
  },
  heroText: {
    ...getFontStyles(400, 14, 21, "white"),
  },
  content: {
    marginHorizontal: 16,
    top: -90,
  },
  userCard: {
    marginBottom: 24,
  },
  spinner: {
    marginTop: 20,
  }
});
