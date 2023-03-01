import { useEffect, useState } from "react"
import { fakeAPI } from "../../../utils/utils"

export default function useData() {
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