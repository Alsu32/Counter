import React from 'react';
import './Button.css';

type ButtonPropsType = {
    onClick:(nameButton:string) =>void
    nameButton:string
    setAmount:(amount:number)=>void
    value: number
    disabled:boolean
}

export const Button = (props:ButtonPropsType)=> {

    const onClickButtonHandler = ()=>props.onClick(props.nameButton)

    const styleButton = props.disabled ? "buttonDisabled" : "button"

    return (

        <button className={styleButton} onClick={onClickButtonHandler}>{props.nameButton}</button>

    );
}