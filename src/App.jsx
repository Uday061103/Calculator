import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonContainer";
import { useState } from "react";


function App() {
  const [disVal, setDisVal] = useState("");
  const onButtonClick = (ButtonList) => {
    if (ButtonList === 'AC') {
      setDisVal("");
    } else if (ButtonList === '=') {
      const result = eval(disVal);
      setDisVal(result);
    } else if(ButtonList  ===  'DEL'){
      const del = disVal.slice(0, -1);
      setDisVal(del);
    }else if (ButtonList === '%') {
      try {
        const result = eval(disVal) / 100;
        setDisVal(result.toString());
      } catch {
        setDisVal('Error');
      } 
    } else {
      const newDisplayValue = disVal + ButtonList;
      setDisVal(newDisplayValue);
    }
  }
  return ( 
    <div className={styles.calculator}>
      <Display displayValue={disVal}/>
      <ButtonsContainer onButtonClick={onButtonClick}/>
    </div>
  );
}

export default App;
