import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Components/Button/Button";
import {InputField} from "./Components/Input/InputField";


function App() {

    let [value, setValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(JSON.parse(localStorage.getItem("startValue") || "0"))
    let [maxValue, setMaxValue] = useState<number>(5)
    let [buttonIncStatusDisabled, setbuttonIncStatusDisabled] = useState<boolean>(value === maxValue)
    let [buttonSetStatusDisabled, setbuttonSetStatusDisabled] = useState<boolean>(true)
    let [valueDisplay, setValueDisplay] = useState<number | string>(value)


    useEffect(()=>{
        localStorage.setItem("startValue", JSON.stringify(startValue) )
    }, [startValue])

    const increaseValue = () => {
        value < maxValue && setValue(value + 1)
    }
    const resetValue = () => {
         setValue(startValue)
    }
    const getNewMaxValue = (newMaxValue:number) => {
        setMaxValue(newMaxValue)
        setValueDisplay( newMaxValue < 0 ? "Incorrect value!" : "enter values and press 'set'")
        setbuttonSetStatusDisabled(newMaxValue< 0)
    }
    const getNewStartValue = (newStartValue:number) => {
        setStartValue(newStartValue)
        setValueDisplay( newStartValue < 0 ? "Incorrect value!" : "enter values and press 'set'")
        setbuttonSetStatusDisabled(newStartValue < 0)
    }
    const setNewStartValueInValue = () => {
        setValue(startValue)
        setbuttonSetStatusDisabled(true)
    }

    useEffect(()=>{
        setValueDisplay(value)
        setbuttonIncStatusDisabled(value === maxValue)
    }, [value])


    return (
        <div className="App">
            <div className="counter">
                <div className="tablo">
                    <InputField inputName={"max value:"}
                                value={maxValue} onChange={getNewMaxValue}/>
                    <InputField inputName={"start value:"}
                                value={startValue} onChange={getNewStartValue}/>
                </div>
                <div className="setButtons">
                    <Button onClick={setNewStartValueInValue} nameButton={"set"} disabled={buttonSetStatusDisabled}/>
                </div>
            </div>
            <div className="counter">
                <div className={valueDisplay === "Incorrect value!" || valueDisplay === maxValue ? "error" : "tablo"}>{valueDisplay}</div>
                <div className="setButtons">
                    <Button onClick={increaseValue} nameButton={"inc"} disabled={buttonIncStatusDisabled}/>
                    <Button onClick={resetValue} nameButton={"reset"} disabled={false}/>
                </div>
            </div>

        </div>
    );
}

export default App;
