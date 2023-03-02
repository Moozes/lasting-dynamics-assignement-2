import { Heading, View, Text, Image } from "native-base";
import { StyleSheet } from "react-native";
import { colors } from "@src/themes/colors";
import { getFontStyles } from "@src/utils/utils";
const chartIcon = require("@src/assets/icons/chart-pie.png")
const creditCardIcon = require("@src/assets/icons/credit-card.png")
const piggyBankIcon = require("@src/assets/icons/piggy-bank.png")
const bankIcon = require("@src/assets/icons/bank.png")

export default function Contributions() {
    return (
        <View style={styles.container} >
            <Heading style={styles.title}>Contributions of 2022</Heading>
            <View style={styles.row}>
                <View style={styles.card}>
                    <Image alt="icon" source={chartIcon} style={styles.icon}/>
                    <Text style={styles.sub}>Paid</Text>
                    <Text style={styles.normalRed}>Unavailable</Text>
                </View>
                <View style={styles.card}>
                    <Image alt="icon" source={creditCardIcon} style={styles.icon}/>
                    <Text style={styles.sub}>Due</Text>
                    <Text style={styles.normalRed}>Unavailable</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.card}>
                    <Image alt="icon" source={piggyBankIcon} style={styles.icon}/>
                    <Text style={styles.sub}>Advance payment</Text>
                    <Text style={styles.normalPrimary}>€ 1,230.00</Text>
                </View>
                <View style={styles.card}>
                    <Image alt="icon" source={bankIcon} style={styles.icon}/>
                    <Text style={styles.sub}>Modularity</Text>
                    <Text style={styles.normalPrimary}>€ 340.59</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    title: {
        ...getFontStyles(500, 22, 26, colors.secondary.default),
        marginBottom: 16
    },
    row: {
        flexDirection: "row",
        gap: 16,
        marginBottom: 16
    },
    card: {
        flexGrow: 1,
        flexBasis: 0,
        alignItems: "center",
        paddingVertical: 24,
        backgroundColor: "white",
        borderRadius: 12
    },
    icon: {
        marginBottom: 10
    },
    sub: {
        marginBottom: 3,
        ...getFontStyles(400, 12, 14, colors.neutral["60"])
    },
    normalRed: {
        ...getFontStyles(400, 16, 19, colors.states.error)
    },
    normalPrimary: {
        ...getFontStyles(400, 16, 19, colors.secondary.default)

    },
})