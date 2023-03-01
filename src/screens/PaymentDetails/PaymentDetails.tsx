import {
  ScrollView,
  View,
  Text,
  Heading,
  Divider,
  Button,
  Image,
  Pressable
} from "native-base";
import { StyleSheet } from "react-native";
import { getFontStyles } from "../../utils/utils";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../themes/colors";

export default function PaymentDetails() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} >
            <Image
            source={require("../../assets/icons/arrow-left.png")}
            alt="icon"
            style={styles.headerIcon}
            />
        </Pressable>
        <Text style={styles.headerTitle}>Payment details</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.titleContainer}>
          <Heading style={styles.title}>Payment notice</Heading>
          <Image
            alt="pagopa"
            source={require("../../assets/backgrounds/pagopa.png")}
            style={styles.icon}
          />
        </View>
        <Divider style={styles.divider} />
        <Text style={styles.text}>Creditor</Text>
        <Text style={styles.sub}>ENPACL</Text>
        <Text style={styles.sub}>Via del Caravaggio n. 78</Text>
        <Text style={styles.sub}>00147 (RM)</Text>
        <Divider style={styles.divider} />
        <Text style={styles.text}>Causal</Text>
        <Text style={styles.sub}>SUBJECTIVE AND SUPPLEMENTARY</Text>
        <Text style={styles.sub}> CONTRIBUTION YEAR 2021 EXPIRY</Text>
        <Text style={styles.sub}> 28-02-2022</Text>
        <Divider style={styles.divider} />
        <Text style={styles.text}>Expiry date</Text>
        <Text style={styles.sub}>02/28/2022</Text>
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
          <Text style={styles.footerPrice}>€ 1,234.99</Text>
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
