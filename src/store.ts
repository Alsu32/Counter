import { legacy_createStore } from 'redux'
import {Reduser} from "./reducer";

export const store = legacy_createStore(Reduser)
export type AppRootStateType = ReturnType<typeof Reduser>

// @ts-ignore
window.store = store

