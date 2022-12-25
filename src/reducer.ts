export type StateType = {
    value: number
    startValue: number
    maxValue: number
    buttonIncStatusDisabled: boolean
    buttonSetStatusDisabled: boolean
    valueDisplay: number | string
}
const initialState:StateType = {
    value: 0,
    startValue: 0,
    maxValue: 5,
    buttonIncStatusDisabled: false,
    buttonSetStatusDisabled: false,
    valueDisplay: 0
}

export const Reduser = (state = initialState, action: MainActionType):StateType => {
    switch (action.type) {
        case 'INCREASE_VALUE':
            if (state.value < state.maxValue) {
                const newValue = state.value + 1
                return newValue < state.maxValue ? {...state, valueDisplay: newValue,  value: newValue} :
                    {...state, valueDisplay: newValue,  value: newValue, buttonIncStatusDisabled: true}

            } else {
                return state
            }

        case 'RESET_VALUE':
            return {...state,valueDisplay: state.startValue, value: state.startValue, buttonIncStatusDisabled: false}
        case 'GET_NEW_MAX_VALUE':
            if (action.newMaxValue < 0) {
                return {...state, maxValue: action.newMaxValue, valueDisplay: "Incorrect value!", buttonSetStatusDisabled: true}
            } else {
                return {...state, maxValue: action.newMaxValue, valueDisplay: "enter values and press 'set'", buttonSetStatusDisabled: false}
            }
        case 'GET_NEW_START_VALUE':
            if (action.newStartValue < 0) {
                return {...state, startValue: action.newStartValue, valueDisplay: "Incorrect value!", buttonSetStatusDisabled: true}
            } else {
                return {...state, startValue: action.newStartValue, valueDisplay: "enter values and press 'set'", buttonSetStatusDisabled: false}
            }

        case 'SET_NEW_START_VALUE_IN_VALUE':
            return {...state, valueDisplay: state.startValue, value: state.startValue, buttonSetStatusDisabled: true}

        default:
            return state
    }
}

type MainActionType = IncreaseValueACType | ResetValueACType | GetNewMaxValueACType | GetNewStartValueACType |
                        SetNewStartValueInValueACType


type IncreaseValueACType = ReturnType<typeof increaseValueAC>
export const increaseValueAC = () => ({
    type: 'INCREASE_VALUE'
}) as const

type ResetValueACType = ReturnType<typeof resetValueAC>
export const resetValueAC = () => ({
    type: 'RESET_VALUE'
}) as const

type GetNewMaxValueACType = ReturnType<typeof getNewMaxValueAC>
export const getNewMaxValueAC = (newMaxValue:number) => ({
    type: 'GET_NEW_MAX_VALUE',
    newMaxValue: newMaxValue
}) as const

type GetNewStartValueACType = ReturnType<typeof getNewStartValueAC>
export const getNewStartValueAC = (newStartValue:number) => ({
    type: 'GET_NEW_START_VALUE',
    newStartValue: newStartValue
}) as const

type SetNewStartValueInValueACType = ReturnType<typeof setNewStartValueInValueAC>
export const setNewStartValueInValueAC = () => ({
    type: 'SET_NEW_START_VALUE_IN_VALUE'
}) as const