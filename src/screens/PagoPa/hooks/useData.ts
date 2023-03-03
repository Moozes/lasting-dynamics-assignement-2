import { useEffect, useState } from "react"
import { getPayments } from "@src/api/payment"
import { TPayment } from "@src/types/types"

export default function useData() {
    const [loading, setLoading] = useState(false)
    const [payments, setPayments] = useState<TPayment[]>([])
    const [error, setError] = useState(false)


    useEffect(() => {
        setLoading(true)
        getPayments()
        .then(payments => {
            setPayments(payments);
            setError(false)
        })
        .catch(e => setError(true))
        .finally(() => setLoading(false))
    }, [])

    return {
        loading, 
        payments,
        error
    }
}