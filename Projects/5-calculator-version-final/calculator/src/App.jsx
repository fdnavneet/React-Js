import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import styles from './App.module.css';
import {useState} from "react"
function App() {

  let [calval ,setCalVal]= useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === 'c') {
       setCalVal ("")
    } else if (buttonText === '=') {
       const result = eval(calval)
       setCalVal(result)
    } else {
      const newDisplayValue = calval +buttonText
      setCalVal(newDisplayValue)
    }
  };
  
  return (
    <>
     <div className={styles.calculator}>
      <Display displayValue ={calval}></Display>
      <ButtonsContainer onButtonClick = {onButtonClick} />
      
     </div>
    </>
  )
}

export default App;
