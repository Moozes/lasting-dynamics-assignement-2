import { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
export default function useHideSplashScreenOnMount() {
    useEffect(() => {
        SplashScreen.hide()
    }, [])
}