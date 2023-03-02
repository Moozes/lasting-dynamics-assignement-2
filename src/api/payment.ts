import { TPayment } from "@src/types/types";
import { axiosInstance } from "./axiosInstance";

export async function getPayments() {
    try {
        const { data } = await axiosInstance.get<TPayment[]>("payment")
        return data
    }catch(e) {
        console.log(e);
        return [];
    }
}

export async function getPaymentDetails(id: string) {
    try {
        const { data } = await axiosInstance.get<TPayment>("payment/"+id)
        return data
    }catch(e) {
        console.log(e)
        return undefined
    }
}