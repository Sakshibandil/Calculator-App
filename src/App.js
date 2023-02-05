import React,{useState} from 'react';
import './App.css';
import img from './img/bgp.jpg'


const App=()=>{
  const [result, setresult]=useState("");

  const clickhandler=(event)=>{
    setresult(result.concat(event.target.name));
  }

  const cleardisplay=()=>{
    setresult("");
  }

  const calculate=()=>{
    try{
      setresult(eval(result).toString());

    } catch(err){
      setresult("Error")
    }
  }

  const backspace=()=>{
    setresult(result.slice(0, result.length -1));

  }
  return(
    <>
    <header>My Calculator</header>
    <div className='image'>
     <img src={img} alt=""/>
     </div>
    <div className='container'>
      <form>
        <input type="text" value={result}/>
      </form>
      <div className='keypad'>
        <button className='highlight' onClick={cleardisplay} id="clear">Clear</button>
        <button  className='highlight'onClick={backspace} id="backspace">C</button>
        <button  className='highlight'name="/" onClick={clickhandler}>&divide;</button>
        <button name="7" onClick={clickhandler}>7</button>
        <button name="8" onClick={clickhandler}>8</button>
        <button name="9" onClick={clickhandler}>9</button>
        <button  className='highlight'name="*" onClick={clickhandler}>&times;</button>
        <button name="4" onClick={clickhandler}>4</button>
        <button name="5" onClick={clickhandler}>5</button>
        <button name="6" onClick={clickhandler}>6</button>
        <button  className='highlight'name="-" onClick={clickhandler}>&ndash;</button>
        <button name="1" onClick={clickhandler}>1</button>
        <button name="2" onClick={clickhandler}>2</button>
        <button name="3" onClick={clickhandler}>3</button>
        <button  className='highlight'name="+" onClick={clickhandler}>+</button>
        <button  name="0" onClick={clickhandler}>0</button>
        <button  name="." onClick={clickhandler}>.</button>
        <button  className='highlight'onClick={calculate} id="result">=</button>
      </div>
    </div>
    </>
  );
}
      
      
      
  

export default App;