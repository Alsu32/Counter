import React, {ChangeEvent} from 'react';
import './Input.css'


export const Input: React.FC<InputPropsType> = ({onChange, value, }) => {

    let classNameInput = value < 0 ? "inputError" : "input"
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.currentTarget.value))
    }

    return (
        <input className={classNameInput} type={"number"} onChange={onChangeHandler} value={value}/>
    );
}

//types
type InputPropsType = {
    onChange: (value:number)=>void
    value:number

}