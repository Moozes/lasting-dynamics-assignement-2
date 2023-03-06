import { StyleSheet } from "react-native";
import { View, Image } from "native-base";
const logoIcon = require("@src/assets/icons/logo.png")
const headerIcon = require("@src/assets/icons/chat.png")

type Props = {
    bgColor : string
}

export default function Header({bgColor}: Props) {
  return (
    <View style={[styles.header, {backgroundColor: bgColor}]}>
      <Image
        alt="icon"
        source={logoIcon}
        style={styles.headerIcon}
        testID="icon1"
        />
      <Image
        alt="icon"
        source={headerIcon}
        style={styles.headerIcon}
        testID="icon2"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 19,
    paddingHorizontal: 16,
  },
  headerIcon: {},
});
