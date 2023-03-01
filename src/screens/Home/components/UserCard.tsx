import { StyleSheet } from "react-native";
import { View, Text, Image } from "native-base";
import type { ViewStyleProp } from "../../../types/types";
import { getFontStyles } from "../../../utils/utils";

type UserCardProps = {
  style?: ViewStyleProp;
};
export default function UserCard(props: UserCardProps) {
  return (
    <View style={[s.card, props.style]}>
      <View style={s.header}>
        <Image alt="icon" source={require('../../../assets/icons/user-circle.png')} style={s.icon}/>
        <Text style={s.title}>User summary</Text>
      </View>
      <View style={s.row1}>
        <View style={s.status}>
          <Text style={s.sub}>Status</Text>
          <Text style={s.normal}>Subscribed</Text>
        </View>
        <View style={s.birthday}>
          <Text style={s.sub}>Birthday</Text>
          <Text style={s.normal}>26/10/1994</Text>
        </View>
      </View>
      <View style={s.row2}>
        <View style={s.city}>
          <Text style={s.sub}>City</Text>
          <Text style={s.normalPrimary}>Barcelona</Text>
        </View>
        <View style={s.countryNumber}>
          <View style={s.country}>
            <Text style={s.sub}>Country</Text>
            <Text style={s.normalPrimary}>ES</Text>
          </View>
          <View style={s.number}>
            <Text style={s.sub}>Number</Text>
            <Text style={s.normalPrimary}>100</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 26,
  },
  header: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 18,
    alignItems: "center"
  },
  icon: {},
  title: {
    ...getFontStyles(600, 16, 19, "#3A3B7B"),
  },
  row1: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16
  },
  row2: {
    flexDirection: "row",
    gap: 12,
  },
  countryNumber: {
    flexDirection: "row",
    gap: 12,
    flexGrow: 1,
    flexBasis: 0,
  },
  status: {
    flexGrow: 1,
    flexBasis: 0,
  },
  birthday: {
    flexGrow: 1,
    flexBasis: 0,
  },
  city: {
    flexGrow: 1,
    flexBasis: 0,
  },
  country: {
    flexGrow: 1,
    flexBasis: 0,
  },
  number: {
    flexGrow: 1,
    flexBasis: 0,
  },
  sub: {
    ...getFontStyles(400, 12, 14, "#6F6D7B"),
    marginBottom: 4
  },
  normal: {
    ...getFontStyles(400, 16, 19, "#312E43"),
  },
  normalPrimary: {
    ...getFontStyles(400, 16, 19, "#3A3B7B"),
  },
});
