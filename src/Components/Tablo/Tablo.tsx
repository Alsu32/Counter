import React from 'react';
import './Tablo.css';

type TabloPropsType = {
    amount:number
}

export const Tablo = (props:TabloPropsType)=> {


    return (
            <div className={props.amount === 5 ? "red" : "tablo"}>
                {props.amount}
            </div>

    );
}