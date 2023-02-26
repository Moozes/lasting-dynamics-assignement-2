import { Text, View, Button, Heading, ScrollView } from "native-base";
import { StyleSheet, Image } from "react-native";
import { font } from "../../utils/utils";
import type { ScreenProps } from "../../types/types";

type LoginProps = ScreenProps;
export default function Login({ navigation, route }: LoginProps) {
  return (
    <ScrollView style={s.container}>
      <Image
        source={require("../../assets/backgrounds/woman.png")}
        alt="woman"
      />
      <Heading style={s.title}>Save your money</Heading>
      <Text style={s.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est in quis
        erat a sit.
      </Text>
      <Button
        style={s.button}
        _text={s.buttonText}
        _pressed={s.buttonPressed}
        onPress={() => navigation.navigate("dashboard")}
      >
        Join for free
      </Button>
      <Text style={s.link}>Don't have SPID or CIE? Find out more</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    backgroundColor: "white",
  },
  title: {
    ...font(600, 32, 38, "#3A3B7B"),
    marginBottom: 8,
    textAlign: "center",
  },
  text: {
    ...font(400, 14, 21, "#6F6D7B"),
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
    ...font(600, 18, 18, "#ffffff"),
  },
  buttonPressed: {
    opacity: 0.5,
  },
  link: {
    ...font(400, 14, 21, "#3A3B7B"),
    textDecorationLine: "underline",
    textAlign: "center",
  },
});
