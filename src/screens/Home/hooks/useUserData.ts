import { useEffect, useState } from "react"
import { fakeAPI } from "@src/utils/utils"

export default function useUserData() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fakeAPI(3000)
        .then(() => setLoading(false))
    }, [])

    return {
        loading
    }
}