export type InitialType = {
    count: number,
    minValue: number,
    maxValue: number,

}

const initialState: InitialType = {
    count: Number(JSON.parse(localStorage.getItem('count') || '0')),
    minValue: Number(JSON.parse(localStorage.getItem('minValue') || '0')),
    maxValue: Number(JSON.parse(localStorage.getItem('maxValue') || '5')),

}


export const counterReducer = (state = initialState, action: ActionType): InitialType => {
    switch (action.type) {
        case "SET-COUNT": {
            return {...state, count: state.count + 1}
        }
        case "RESET-COUNT": {
            return {...state, count: state.minValue}
        }
        case "ONCHANGE-MINVALUE": {
            return {...state, minValue: action.minValue}
        }
        case "ONCHANGE-MAXVALUE": {
            return {...state, maxValue: action.maxValue}
        }
        case "SET-LIMIT-VALUE": {
            return {...state, minValue: state.minValue, maxValue: state.maxValue}
        }
        default:
            return state

    }
}


export const setCount = () => {
    return {
        type: "SET-COUNT",
    } as const
}
export const ResetCountAC = () => {
    return {
        type: "RESET-COUNT",
    } as const
}
export const setMinValue = (minValue: number) => {
    return {
        type: "ONCHANGE-MINVALUE",
        minValue
    } as const
}
export const setMaxValue = (maxValue: number) => {
    return {
        type: "ONCHANGE-MAXVALUE",
        maxValue
    } as const
}

export const setLimit = () => {
    return {
        type: "SET-LIMIT-VALUE",
    } as const
}

type ActionType = setCountType | ResetCountACType | setMinValueType | setMaxValueType | setLimitType

type setCountType = ReturnType<typeof setCount>
type ResetCountACType = ReturnType<typeof ResetCountAC>
type setMinValueType = ReturnType<typeof setMinValue>
type setMaxValueType = ReturnType<typeof setMaxValue>
type setLimitType = ReturnType<typeof setLimit>

