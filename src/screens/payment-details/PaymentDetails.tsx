import { ScrollView, View, Text, Heading, Divider, Button } from "native-base";
import { StyleSheet } from "react-native";
import { ScreenProps } from "../../types/types";
import { font } from "../../utils/utils";

type Props = ScreenProps;

export default function PaymentDetails(props: Props) {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.headerIcon}>IC</Text>
        <Text style={s.headerTitle}>Payment details</Text>
      </View>
      <ScrollView
        style={s.scrollView}
        contentContainerStyle={s.scrollViewContent}
      >
        <View style={s.titleContainer}>
          <Heading style={s.title}>Payment notice</Heading>
          <Text style={s.icon}>IC</Text>
        </View>
        <Divider style={s.divider} />
        <Text style={s.text}>Creditor</Text>
        <Text style={s.sub}>ENPACL</Text>
        <Text style={s.sub}>Via del Caravaggio n. 78</Text>
        <Text style={s.sub}>00147 (RM)</Text>
        <Divider style={s.divider} />
        <Text style={s.text}>Causal</Text>
        <Text style={s.sub}>SUBJECTIVE AND SUPPLEMENTARY</Text>
        <Text style={s.sub}> CONTRIBUTION YEAR 2021 EXPIRY</Text>
        <Text style={s.sub}> 28-02-2022</Text>
        <Divider style={s.divider} />
        <Text style={s.text}>Expiry date</Text>
        <Text style={s.sub}>02/28/2022</Text>
        <Divider style={s.divider} />
        <Text style={s.text}>Creditor tax code</Text>
        <Text style={s.sub}>8011911704444</Text>
        <Divider style={s.divider} />
        <Text style={s.text}>Notice code</Text>
        <Text style={s.sub}>301000000014982222</Text>

      </ScrollView>
        <View style={s.footer}>
          <View style={s.footerRow}>
            <Text style={s.footerText}>Total due</Text>
            <Text style={s.footerPrice}>€ 1,234.99</Text>
          </View>
          <Button style={s.footerButton} _text={s.buttonText} _pressed={s.pressed}>
            Pay now
          </Button>
        </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#BF7EE6",
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  headerIcon: {},
  headerTitle: {
    flexGrow: 1,
    textAlign: "center",
    ...font(400, 16, 19, "white"),
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
  },
  title: {
    ...font(600, 20, 24, "#3A3B7B"),
  },
  icon: {},
  divider: {
    marginVertical: 16,
  },
  section: {},
  text: {
    ...font(600, 16, 19, "#312E43"),
    marginBottom: 4
  },
  sub: {
    ...font(400, 16, 19, "#6F6D7B"),
  },
  footer: {
    // marginTop: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderTopColor: "#EAEAEC",
    borderTopWidth: 1
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  footerText: {
    ...font(600, 20, 24, "#312E43"),
  },
  footerPrice: {
    ...font(400, 20, 24, "#F83E5A"),
  },
  footerButton: {
    backgroundColor: "#BF7EE6",
    paddingVertical: 16,
    borderRadius: 4,
  },
  buttonText: {
    ...font(600, 18, 18, "white"),
  },
  pressed: {
    opacity: 0.5
  }
});
