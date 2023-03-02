import { axiosInstance } from "./axiosInstance";
import { TUser } from "@src/types/types";

export async function getUser() {
    try {
        const { data } = await axiosInstance.get<TUser[]>("user")
        return data[0]
    }catch(e) {
        console.log(e)
        return undefined
    }
} 