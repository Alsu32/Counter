import React from 'react';
import {Input} from "./Input";


export const InputField: React.FC<InputFieldPropsType> = ({inputName, value, onChange}) => {

    return (
        <div>
            <span className="nameInput">{inputName}</span>
            <Input onChange={onChange} value={value}/>
        </div>
    );
}

//types
type InputFieldPropsType = {
    inputName: string
    value:number
    onChange:(value:number)=>void
}