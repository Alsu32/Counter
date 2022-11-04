import React, {useState} from 'react';
import './App.css';
import {Tablo} from "./Tablo";
import {Button} from "./Button";



function App() {

  let [amount, setAmount]  = useState<number>(0)
  let [disabled, setDisabled] = useState<boolean>(true)

    const onClick  = (name:string)=> {
      name==="inc" && amount < 5 && setAmount(amount + 1)
      name==="reset" && setAmount(0)
  }

  return (
      <div className="App">
          <div className="counter">
            <Tablo amount={amount}/>
            <div className="setButtons">
                <Button onClick = {onClick} nameButton={"inc"} setAmount={setAmount} value={amount} disabled={disabled}/>
                <Button onClick = {onClick} nameButton={"reset"} setAmount={setAmount} value={amount} disabled={disabled}/>
            </div>
          </div>
      </div>
  );
}

export default App;
