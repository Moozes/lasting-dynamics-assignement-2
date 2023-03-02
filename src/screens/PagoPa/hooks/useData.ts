import { useEffect, useState } from "react"
import { fakeAPI } from "@src/utils/utils"
import { getPayments } from "@src/api/payment"
import { TPayment } from "@src/types/types"

export default function useData() {
    const [loading, setLoading] = useState(false)
    const [payments, setPayments] = useState<TPayment[]>([])


    useEffect(() => {
        setLoading(true)
        getPayments()
        .then(payments => setPayments(payments))
        .finally(() => setLoading(false))
    }, [])

    return {
        loading,
        payments
    }
}