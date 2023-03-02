import { StyleSheet } from "react-native";
import { View, Text, Image } from "native-base";
import { TUser, ViewStyleProp } from "@src/types/types";
import { getFontStyles } from "@src/utils/utils";
import { colors } from "@src/themes/colors";

const userCircleIcon = require('@src/assets/icons/user-circle.png')

type UserCardProps = {
  style?: ViewStyleProp;
  user: TUser
};
export default function UserCard({style, user}: UserCardProps) {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.header}>
        <Image alt="icon" source={userCircleIcon} style={styles.icon}/>
        <Text style={styles.title}>User summary</Text>
      </View>
      <View style={styles.row1}>
        <View style={styles.status}>
          <Text style={styles.sub}>Status</Text>
          <Text style={styles.normal}>{user.status}</Text>
        </View>
        <View style={styles.birthday}>
          <Text style={styles.sub}>Birthday</Text>
          <Text style={styles.normal}>{user.birthday}</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <View style={styles.city}>
          <Text style={styles.sub}>City</Text>
          <Text style={styles.normalPrimary}>{user.city}</Text>
        </View>
        <View style={styles.countryNumber}>
          <View style={styles.country}>
            <Text style={styles.sub}>Country</Text>
            <Text style={styles.normalPrimary}>{user.country}</Text>
          </View>
          <View style={styles.number}>
            <Text style={styles.sub}>Number</Text>
            <Text style={styles.normalPrimary}>{user.number}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    ...getFontStyles(600, 16, 19, colors.secondary.default),
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
    ...getFontStyles(400, 12, 14, colors.neutral["70"]),
    marginBottom: 4
  },
  normal: {
    ...getFontStyles(400, 16, 19, colors.neutral["100"]),
  },
  normalPrimary: {
    ...getFontStyles(400, 16, 19, colors.secondary.default),
  },
});
