// state
const initialState = {
    value: 0,
    startValue: 0,
    maxValue: 5,
    buttonSetStatusDisabled: true,
    valueDisplay: 0 as number | string
}
//reducer
export const Reducer = (state:InitialStateType = initialState, action: MainActionType): InitialStateType => {
    switch (action.type) {
        case 'INCREASE_VALUE':
            if (state.value < state.maxValue) {
                const newValue = state.value + 1
                return {...state, valueDisplay: newValue, value: newValue}
            } else {
                return state
            }
        case 'RESET_VALUE':
            return {...state, valueDisplay: state.startValue, value: state.startValue}
        case 'GET_NEW_MAX_VALUE':
            return {...state, maxValue: action.newMaxValue, buttonSetStatusDisabled: false,
                valueDisplay: action.newMaxValue < 0 || state.startValue < 0 ? "Incorrect value!" : "enter values and press 'set'"
            }
        case 'GET_NEW_START_VALUE':
            return {...state, startValue: action.newStartValue, buttonSetStatusDisabled: false,
                valueDisplay: action.newStartValue < 0 || state.maxValue < 0 ? "Incorrect value!" : "enter values and press 'set'"
            }
        case 'SET_NEW_START_VALUE_IN_VALUE':
            return {...state, valueDisplay: state.startValue, value: state.startValue, buttonSetStatusDisabled: true}
        default:
            return state
    }
}
// actions
export const increaseValueAC = () => ({type: 'INCREASE_VALUE'}) as const
export const resetValueAC = () => ({type: 'RESET_VALUE'}) as const
export const getNewMaxValueAC = (newMaxValue: number) => ({type: 'GET_NEW_MAX_VALUE', newMaxValue: newMaxValue}) as const
export const getNewStartValueAC = (newStartValue: number) =>
    ({type: 'GET_NEW_START_VALUE', newStartValue: newStartValue}) as const
export const setNewStartValueInValueAC = () => ({type: 'SET_NEW_START_VALUE_IN_VALUE'}) as const
//types
export type InitialStateType = typeof initialState
type MainActionType =
    | ReturnType<typeof increaseValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof getNewMaxValueAC>
    | ReturnType<typeof getNewStartValueAC>
    | ReturnType<typeof setNewStartValueInValueAC>
