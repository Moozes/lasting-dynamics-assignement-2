import { StyleSheet } from "react-native";
import { View, Image } from "native-base";

type Props = {
    bgColor : string
}

export default function Header(props: Props) {
  return (
    <View style={[styles.header, {backgroundColor: props.bgColor}]}>
      <Image
        alt="icon"
        source={require("../assets/icons/logo.png")}
        style={styles.headerIcon}
      />
      <Image
        alt="icon"
        source={require("../assets/icons/chat.png")}
        style={styles.headerIcon}
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
