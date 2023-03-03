import {
  ScrollView,
  View,
  Text,
  Heading,
  Divider,
  Button,
  Image,
  Pressable,
} from "native-base";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getFontStyles } from "@src/utils/utils";
import { colors } from "@src/themes/colors";
import { usePaymentData } from "./hooks/usePaymentData";
import { ActivityIndicator } from "react-native";
const leftArrowIcon = require("@src/assets/icons/arrow-left.png");
const pagopaImg = require("@src/assets/backgrounds/pagopa.png");

export default function PaymentDetails() {
  const navigation = useNavigation();
  const { loading, paymentDetails } = usePaymentData();
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  if (!paymentDetails) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.error}>Error fetching data</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={leftArrowIcon} alt="icon" style={styles.headerIcon} />
        </Pressable>
        <Text style={styles.headerTitle}>Payment details</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.titleContainer}>
          <Heading style={styles.title}>Payment notice</Heading>
          <Image alt="pagopa" source={pagopaImg} style={styles.icon} />
        </View>
        <Divider style={styles.divider} />
        <Text style={styles.text}>Creditor</Text>
        <Text style={styles.sub}>ENPACL</Text>
        <Text style={styles.sub}>Via del Caravaggio n. 78</Text>
        <Text style={styles.sub}>00147 (RM)</Text>
        <Divider style={styles.divider} />
        <Text style={styles.text}>Causal</Text>
        <Text style={styles.sub}>{paymentDetails.title}</Text>
        <Text style={styles.sub}> {paymentDetails.date}</Text>
        <Divider style={styles.divider} />
        <Text style={styles.text}>Expiry date</Text>
        <Text style={styles.sub}>{paymentDetails.date}</Text>
        <Divider style={styles.divider} />
        <Text style={styles.text}>Creditor tax code</Text>
        <Text style={styles.sub}>8011911704444</Text>
        <Divider style={styles.divider} />
        <Text style={styles.text}>Notice code</Text>
        <Text style={styles.sub}>301000000014982222</Text>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Total due</Text>
          <Text style={styles.footerPrice}>€ {paymentDetails.price}</Text>
        </View>
        <Button
          style={styles.footerButton}
          _text={styles.buttonText}
          _pressed={styles.pressed}
        >
          Pay now
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    textAlign: "center",
    color: colors.states.error,
  },
  container: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    backgroundColor: colors.services.rose,
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: 24,
    alignItems: "center",
  },
  headerIcon: {},
  headerTitle: {
    flexGrow: 1,
    textAlign: "center",
    ...getFontStyles(400, 16, 19, "white"),
  },
  scrollView: {
    height: 400,
    // flexGrow: 1
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 32,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    ...getFontStyles(600, 20, 24, colors.secondary.default),
  },
  icon: {
    width: 40,
    height: 40,
  },
  divider: {
    marginVertical: 16,
  },
  section: {},
  text: {
    ...getFontStyles(600, 16, 19, colors.neutral["100"]),
    marginBottom: 4,
  },
  sub: {
    ...getFontStyles(400, 16, 19, colors.neutral["70"]),
  },
  footer: {
    // marginTop: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderTopColor: colors.neutral["10"],
    borderTopWidth: 1,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  footerText: {
    ...getFontStyles(600, 20, 24, colors.neutral["100"]),
  },
  footerPrice: {
    ...getFontStyles(400, 20, 24, colors.states.error),
  },
  footerButton: {
    backgroundColor: colors.services.rose,
    paddingVertical: 16,
    borderRadius: 4,
  },
  buttonText: {
    ...getFontStyles(600, 18, 18, "white"),
  },
  pressed: {
    opacity: 0.5,
  },
});
