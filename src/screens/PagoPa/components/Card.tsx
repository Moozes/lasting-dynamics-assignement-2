import { Heading, Image, View, Text } from "native-base";
import { StyleSheet } from "react-native";
import { colors } from "@src/themes/colors";
import { ViewStyleProp } from "@src/types/types";
import { getFontStyles } from "@src/utils/utils";

type CardProps = {
  title: string;
  date: string;
  price: string;
  style?: ViewStyleProp;
};
export default function Card({ title, date, price, style }: CardProps) {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.image}
        alt="pagopa"
        source={require("../../../assets/backgrounds/pagopa.png")}
      />
      <View style={styles.content}>
        <Heading style={styles.title}> {title} </Heading>
        <View style={styles.footer}>
          <Text style={styles.date}> {date} </Text>
          <Text style={styles.price}> € {price} </Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <Image alt="icon" source={require('../../../assets/icons/arrow-right.png')} style={styles.icon}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 8,
    gap: 12,
    borderRadius: 8,
  },
  image: {},
  content: {
    flexGrow: 1,
    justifyContent: "space-around",
  },
  title: {
    ...getFontStyles(400, 14, 16, colors.neutral["100"]),
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    ...getFontStyles(400, 14, 21, colors.neutral["40"]),
  },
  price: {
    ...getFontStyles(400, 14, 21, colors.states.error),
  },
  iconContainer: {
    justifyContent: "center",
  },
  icon: {},
});
