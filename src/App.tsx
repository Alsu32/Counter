import React, {useState} from 'react';
import './App.css';
import {Tablo} from "./Tablo";
import {Button} from "./Button";


function App() {

  let [amount, setAmount]  = useState<number>(0)

  let [buttonIncDisabled, setButtonIncDisabled] = useState<boolean>(false)
  let [buttonResetDisabled, setButtonResetDisabled] = useState<boolean>(true)

  const onClickButton  = (name:string)=> {
      name==="inc" && amount < 5 && setAmount(amount + 1)
      name==="reset" && setAmount(0)

      name==="inc" && amount === 5 ? setButtonIncDisabled(true) : setButtonIncDisabled(false)
      name==="reset" && amount === 0 ? setButtonResetDisabled(true) : setButtonResetDisabled(false)
  }


  return (
      <div className="App">
          <div className="counter">
            <Tablo amount={amount}/>
            <div className="setButtons">
                <Button onClick = {onClickButton} nameButton={"inc"} setAmount={setAmount} value={amount} disabled={buttonIncDisabled}/>
                <Button onClick = {onClickButton} nameButton={"reset"} setAmount={setAmount} value={amount} disabled={buttonResetDisabled}/>
            </div>
          </div>
      </div>
  );
}

export default App;
