import { Heading, View, Text, Image } from "native-base";
import { StyleSheet } from "react-native";
import { font } from "../../../utils/utils";

export default function Contributions() {
    return (
        <View style={s.container} >
            <Heading style={s.title}>Contributions of 2022</Heading>
            <View style={s.row}>
                <View style={s.card}>
                    <Image alt="icon" source={require('../../../assets/icons/chart-pie.png')} style={s.icon}/>
                    <Text style={s.sub}>Paid</Text>
                    <Text style={s.normalRed}>Unavailable</Text>
                </View>
                <View style={s.card}>
                    <Image alt="icon" source={require('../../../assets/icons/credit-card.png')} style={s.icon}/>
                    <Text style={s.sub}>Due</Text>
                    <Text style={s.normalRed}>Unavailable</Text>
                </View>
            </View>
            <View style={s.row}>
                <View style={s.card}>
                    <Image alt="icon" source={require('../../../assets/icons/piggy-bank.png')} style={s.icon}/>
                    <Text style={s.sub}>Advance payment</Text>
                    <Text style={s.normalPrimary}>€ 1,230.00</Text>
                </View>
                <View style={s.card}>
                    <Image alt="icon" source={require('../../../assets/icons/bank.png')} style={s.icon}/>
                    <Text style={s.sub}>Modularity</Text>
                    <Text style={s.normalPrimary}>€ 340.59</Text>
                </View>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container: {},
    title: {
        ...font(500, 22, 26, "#3A3B7B"),
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
        ...font(400, 12, 14, "#83828E")
    },
    normalRed: {
        ...font(400, 16, 19, "#F83E5A")
    },
    normalPrimary: {
        ...font(400, 16, 19, "#3A3B7B")

    },
})