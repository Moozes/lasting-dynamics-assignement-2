import {
  Text,
  View,
  ScrollView,
  StatusBar,
  Heading,
  Pressable,
} from "native-base";
import { StyleSheet } from "react-native";
import { ScreenProps } from "../../types/types";
import { font } from "../../utils/utils";
import Card from "./components/Card";
import { data } from "./components/data";
import useData from "./hooks/useData";
import { ActivityIndicator } from "react-native";

type PagoPaProps = ScreenProps;

export default function PagoPa(props: PagoPaProps) {
  const { loading } = useData();
  return (
    <ScrollView
      style={s.container}
      _contentContainerStyle={{ paddingBottom: 10 }}
    >
      <StatusBar backgroundColor="#BF7EE6" barStyle="light-content" />
      <View style={s.header}>
        <Text style={s.headerIcon}>IC</Text>
        <Text style={s.headerIcon}>IC</Text>
      </View>
      <View style={s.hero}>
        <Text style={s.heroText}>Tax payments</Text>
        <Text style={s.heroIcon}>IC</Text>
      </View>
      <View style={s.content}>
        <Heading style={s.title}>Movements to pay</Heading>
        <Text style={s.sub}>
          View pending transactions for the past two years and proceed to
          payment.
        </Text>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          data.map((elm, i) => (
            <Pressable key={i} onPress={() => props.navigation.navigate("Profile")} >
              <Card
                style={s.card}
                title={elm.title}
                date={elm.date}
                price={elm.price}
              />
            </Pressable>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "#BF7EE6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 19,
    paddingHorizontal: 16,
  },
  headerIcon: {
    color: "white",
  },
  hero: {
    backgroundColor: "#BF7EE6",
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 34,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heroText: {
    ...font(600, 24, 28, "white"),
  },
  heroIcon: {
    color: "white",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    ...font(600, 24, 28, "#3A3B7B"),
    marginBottom: 8,
  },
  sub: {
    ...font(400, 14, 21, "#6F6D7B"),
    marginBottom: 24,
  },
  card: {
    marginBottom: 12,
  },
});
