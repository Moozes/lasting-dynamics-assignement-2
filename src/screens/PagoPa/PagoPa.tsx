import {
  Text,
  View,
  ScrollView,
  StatusBar,
  Heading,
  Pressable,
  Image
} from "native-base";
import { StyleSheet } from "react-native";
import Card from "./components/Card";
import { data } from "./components/data";
import useData from "./hooks/useData";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getFontStyles } from "@src/utils/utils";
import Header from "@src/components/Header";
import { colors } from "@src/themes/colors";
const logo2Icon = require('@src/assets/icons/logo2.png')

export default function PagoPa() {
  const { loading, payments } = useData();
  const navigation = useNavigation()
  return (
    <ScrollView
      style={styles.container}
      _contentContainerStyle={{ paddingBottom: 10 }}
    >
      <StatusBar
        hidden
      />
      <Header bgColor={colors.services.rose}/>
      <View style={styles.hero}>
        <Text style={styles.heroText}>Tax payments</Text>
        <Image alt="logo2" source={logo2Icon} style={styles.heroIcon}/>
      </View>
      <View style={styles.content}>
        <Heading style={styles.title}>Movements to pay</Heading>
        <Text style={styles.sub}>
          View pending transactions for the past two years and proceed to
          payment.
        </Text>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          payments.map((elm, i) => (
            <Pressable
              key={i}
              onPress={() => navigation.navigate("payment-details" as never, {id: elm.id} as never)}
              _pressed={styles.pressed}
            >
              <Card
                style={styles.card}
                {...elm}
                // title={elm.title}
                // date={elm.date}
                // price={elm.price}
              />
            </Pressable>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.default
  },
  hero: {
    backgroundColor: colors.services.rose,
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 34,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  heroText: {
    ...getFontStyles(600, 24, 28, colors.neutral.white),
  },
  heroIcon: {
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    ...getFontStyles(600, 24, 28, colors.secondary.default),
    marginBottom: 8,
  },
  sub: {
    ...getFontStyles(400, 14, 21, colors.neutral["70"]),
    marginBottom: 24,
  },
  card: {
    marginBottom: 12,
  },
  pressed: {
    opacity: 0.5
  }
});
