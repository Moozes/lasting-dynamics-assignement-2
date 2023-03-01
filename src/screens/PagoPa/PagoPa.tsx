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
import { getFontStyles } from "../../utils/utils";
import Card from "./components/Card";
import { data } from "./components/data";
import useData from "./hooks/useData";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";


export default function PagoPa() {
  const { loading } = useData();
  const navigation = useNavigation()
  return (
    <ScrollView
      style={s.container}
      _contentContainerStyle={{ paddingBottom: 10 }}
    >
      <StatusBar
        backgroundColor="#BF7EE6"
        hidden
        barStyle="light-content"
      />
      <Header bgColor="#BF7EE6"/>
      <View style={s.hero}>
        <Text style={s.heroText}>Tax payments</Text>
        <Image alt="logo2" source={require('../../assets/icons/logo2.png')} style={s.heroIcon}/>
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
            <Pressable
              key={i}
              onPress={() => navigation.navigate("payment-details" as never)}
            >
              <Card
                style={s.card}
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

const s = StyleSheet.create({
  container: {
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
    alignItems: "center"
  },
  heroText: {
    ...getFontStyles(600, 24, 28, "white"),
  },
  heroIcon: {
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    ...getFontStyles(600, 24, 28, "#3A3B7B"),
    marginBottom: 8,
  },
  sub: {
    ...getFontStyles(400, 14, 21, "#6F6D7B"),
    marginBottom: 24,
  },
  card: {
    marginBottom: 12,
  },
});
