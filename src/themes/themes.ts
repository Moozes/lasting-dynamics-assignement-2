import { extendTheme } from "native-base";


export const theme = extendTheme({
    components: {
        Text: {
            baseStyle: {
                fontFamily: 'WorkSans-VariableFont_wght'
            }
        },
        Heading: {
            baseStyle: {
                fontFamily: 'WorkSans-VariableFont_wght'
            }
        },
    }
})