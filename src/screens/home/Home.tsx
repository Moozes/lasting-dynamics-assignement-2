import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { ScreenProps } from "../../types/types";

type HomeProps = ScreenProps
export default function Home(props: HomeProps) {
    return (
        <View>
            <Text>home</Text>
        </View>
    )
}

const s = StyleSheet.create({
    
})