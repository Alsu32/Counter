import React from 'react';
import './Button.css';


export const Button: React.FC<ButtonPropsType> = ({onClick, nameButton,disabled})=> {

    const onClickButtonHandler = ()=>{onClick(nameButton)}
    const styleButton = disabled ? "buttonDisabled" : "button"

    return (
        <button  onClick={onClickButtonHandler} className={styleButton}>{nameButton}</button>
    );
}

//types
type ButtonPropsType = {
    onClick:(nameButton:string) =>void
    nameButton:string
    disabled: boolean
}