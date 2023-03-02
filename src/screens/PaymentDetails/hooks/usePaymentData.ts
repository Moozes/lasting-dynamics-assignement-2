import { useRoute } from "@react-navigation/native";
import { getPaymentDetails } from "@src/api/payment";
import { TPayment } from "@src/types/types";
import { useEffect, useState } from "react";


export function usePaymentData() {
    const [loading, setLoading] = useState(false)
    const [paymentDetails, setPaymentDetails] = useState<TPayment | undefined>(undefined)
    const { id } = useRoute().params as any
    useEffect(() => {
        setLoading(true)
        getPaymentDetails(id)
        .then(paymentDetail => setPaymentDetails(paymentDetail))
        .finally(() => setLoading(false))
    }, [])

    return {
        loading,
        paymentDetails
    }
}