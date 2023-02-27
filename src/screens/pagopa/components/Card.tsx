import { Heading, Image, View, Text } from "native-base";
import { StyleSheet } from "react-native";
import { ViewStyleProp } from "../../../types/types";
import { font } from "../../../utils/utils";

type CardProps = {
  title: string;
  date: string;
  price: string;
  style?: ViewStyleProp;
};
export default function Card({ title, date, price, style }: CardProps) {
  return (
    <View style={[s.container, style]}>
      <Image
        style={s.image}
        alt="pagopa"
        source={require("../../../assets/backgrounds/pagopa.png")}
      />
      <View style={s.content}>
        <Heading style={s.title}> {title} </Heading>
        <View style={s.footer}>
          <Text style={s.date}> {date} </Text>
          <Text style={s.price}> € {price} </Text>
        </View>
      </View>
      <View style={s.iconContainer}>
        <Image alt="icon" source={require('../../../assets/icons/arrow-right.png')} style={s.icon}/>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 8,
    gap: 12,
    borderRadius: 8,
    // shadowColor: "#14000000",
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 6,
  },
  image: {},
  content: {
    flexGrow: 1,
    justifyContent: "space-around",
  },
  title: {
    ...font(400, 14, 16, "#312E43"),
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    ...font(400, 14, 21, "#A5A5AA"),
  },
  price: {
    ...font(400, 14, 21, "#F83E5A"),
  },
  iconContainer: {
    justifyContent: "center",
  },
  icon: {},
});
