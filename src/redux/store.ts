import {applyMiddleware, legacy_createStore} from 'redux'
import {Reducer} from "./reducer";
import thunk from "redux-thunk"
import {loadState, saveState} from "../utils/localStorage";

export const store = legacy_createStore(Reducer, loadState(), applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof Reducer>


store.subscribe(() => {
    saveState({
        value: store.getState().value,
        startValue: store.getState().startValue,
        maxValue: store.getState().maxValue,
        valueDisplay: store.getState().valueDisplay
    });
});

// @ts-ignore
window.store = store

