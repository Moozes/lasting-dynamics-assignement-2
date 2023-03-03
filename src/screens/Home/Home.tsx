import { StyleSheet } from "react-native";
import { Text, View, ScrollView, StatusBar, Heading } from "native-base";
import { getFontStyles } from "@src/utils/utils";
import UserCard from "./components/UserCard";
import Contributions from "./components/Contributions";
import useUserData from "./hooks/useUserData";
import { ActivityIndicator } from "react-native";
import Header from "@src/components/Header";
import { colors } from "@src/themes/colors";

export default function Home() {
  const { loading, user } = useUserData();

  return (
    <ScrollView style={styles.container} >
      <StatusBar hidden />
      <Header bgColor={colors.primary.default}/>
      <View style={styles.hero}>
        <Heading style={styles.heroHeading}>Hello, {loading ? "loading..." : user?.name}</Heading>
        <Text style={styles.heroText}>Welcome in Moneylia</Text>
      </View>
      {loading ? (
        <ActivityIndicator style={styles.spinner} size="large" />
      ) : (
        <>
        <View style={styles.content}>
          {user && <UserCard style={styles.userCard} user={user}/>}
          {user && <Contributions />}
        </View>
        {!user && <Text style={styles.error} >Error fetching user data</Text>}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.default
  },
  hero: {
    backgroundColor: colors.primary.default,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 139,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  heroHeading: {
    ...getFontStyles(400, 32, 38, colors.neutral.white),
  },
  heroText: {
    ...getFontStyles(400, 14, 21, colors.neutral.white),
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
  },
  error: {
    textAlign: "center",
    marginTop: 40,
    color: colors.states.error 
  }
});
