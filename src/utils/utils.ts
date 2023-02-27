import type { TfontWeight } from "../types/types"

export function font(weight: number, size: number, lineHeight: number, color: string) {
    return {
        fontWeight: `${weight}` as TfontWeight,
        fontSize: size,
        lineHeight: lineHeight,
        color,
    }
}

export function fakeAPI(ms: number) {
    return new Promise((res, rej) => setTimeout(() => res(null), ms))
}