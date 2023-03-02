import { useEffect, useState } from "react"
import { fakeAPI } from "@src/utils/utils"
import { getUser } from "@src/api/user"
import { TUser } from "@src/types/types"

export default function useUserData() {
    const [user, setUser] = useState<TUser | undefined>(undefined)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getUser()
        .then(user => setUser(user))
        .finally(() => {
            setLoading(false);
            // console.log(user)
        })
    }, [])

    return {
        loading,
        user
    }
}