import { Text, View, Button, Heading, ScrollView, StatusBar } from "native-base";
import { StyleSheet, Image } from "react-native";
import { getFontStyles } from "../../utils/utils";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      <StatusBar  backgroundColor="white" barStyle="dark-content" />
      <Image
        source={require("../../assets/backgrounds/woman.png")}
        alt="woman"
      />
      <Heading style={styles.title}>Save your money</Heading>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est in quis
        erat a sit.
      </Text>
      <Button
        style={styles.button}
        _text={styles.buttonText}
        _pressed={styles.buttonPressed}
        onPress={() => navigation.navigate("dashboard" as never)}
      >
        Join for free
      </Button>
      <Text style={styles.link}>Don't have SPID or CIE? Find out more</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    backgroundColor: "white",
  },
  title: {
    ...getFontStyles(600, 32, 38, "#3A3B7B"),
    marginBottom: 8,
    textAlign: "center",
  },
  text: {
    ...getFontStyles(400, 14, 21, "#6F6D7B"),
    marginBottom: 60,
    textAlign: "center",
  },
  button: {
    marginBottom: 24,
    backgroundColor: "#7476ED",
    borderRadius: 4,
    paddingVertical: 16,
  },
  buttonText: {
    ...getFontStyles(600, 18, 18, "#ffffff"),
  },
  buttonPressed: {
    opacity: 0.5,
  },
  link: {
    ...getFontStyles(400, 14, 21, "#3A3B7B"),
    textDecorationLine: "underline",
    textAlign: "center",
  },
});
