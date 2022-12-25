import React from 'react';
import './App.css';
import {Button} from "./Components/Button/Button";
import {InputField} from "./Components/Input/InputField";
import {useDispatch, useSelector} from "react-redux";
import {
    getNewMaxValueAC,
    getNewStartValueAC,
    increaseValueAC,
    resetValueAC,
    setNewStartValueInValueAC, StateType
} from "./reducer";
import {AppRootStateType} from "./store";


function App() {

    const state = useSelector<AppRootStateType, StateType>(state => state)
    const dispatch = useDispatch()

    const increaseValue = () => {
        dispatch(increaseValueAC())
    }
    const resetValue = () => {
        dispatch(resetValueAC())
    }
    const getNewMaxValue = (newMaxValue: number) => {
        dispatch(getNewMaxValueAC(newMaxValue))
    }
    const getNewStartValue = (newStartValue: number) => {
        dispatch(getNewStartValueAC(newStartValue))
    }
    const setNewStartValueInValue = () => {
        dispatch(setNewStartValueInValueAC())
    }

    return (
        <div className="App">
            <div className="counter">
                <div className="tablo">
                    <InputField inputName={"max value:"}
                                value={state.maxValue} onChange={getNewMaxValue}/>
                    <InputField inputName={"start value:"}
                                value={state.startValue} onChange={getNewStartValue}/>
                </div>
                <div className="setButtons">
                    <Button onClick={setNewStartValueInValue} nameButton={"set"}
                            disabled={state.buttonSetStatusDisabled}/>
                </div>
            </div>
            <div className="counter">
                <div className={state.valueDisplay === "Incorrect value!" || state.valueDisplay === state.maxValue
                    ? "error" : "tablo"}>{state.valueDisplay}</div>
                <div className="setButtons">
                    <Button onClick={increaseValue} nameButton={"inc"} disabled={state.buttonIncStatusDisabled}/>
                    <Button onClick={resetValue} nameButton={"reset"} disabled={false}/>
                </div>


            </div>
        </div>
    );
}

export default App;
