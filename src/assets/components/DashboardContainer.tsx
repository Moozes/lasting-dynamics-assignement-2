import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import type { StackScreenProps } from "../../types/types";


type DashboardConainerProps = StackScreenProps
export default function DashboardConainer(props: DashboardConainerProps) {
    return (
        <View><Text>dashboard</Text></View>
    )
}

const s = StyleSheet.create({
    
})