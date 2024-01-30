
import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

const App = () => {
  
  const [btnSum, setSum] = useState("");
  const [buttons, setButtons] = useState(["M+", "M-", "%", "C", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"]);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
  // functionality for keyboard to be added here
  }


  const handleClick = (string) => {
    if(string === "="){
      let expression = btnSum;
      setSum(evaluate(expression))

    } else if(string === "C"){
      setSum("")
      // would like to add functionality here for M+ M- buttons but for now just set them to function same as C
    } else if(string === "M-" || string === "M+"){
      setSum("")
    } else {
        setSum(btnSum + string)
    }

  }

  return (
    <div className='centre'>
      <div className='calcCont'>
        <div className='display'>
          <div className='operator'></div>
          <input className='myInput blink dispF' placeholder="0" defaultValue={btnSum}></input>
        </div>
          <div className='buttonCont'>
            {
              buttons.map((button, index) => {
                return (
                  <button key={index} onClick={() => handleClick(button)} className={`varela-round-regular`}>{button}</button>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

export default App
