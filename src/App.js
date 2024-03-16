import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //ternary opeator use in this program
  //The ternary operator is a simplified conditional operator like if / else.
  //Syntax: condition ? <expression if true> : <expression if false>
  //

  const[status,setstatus]=useState(false)
  const[neww,setneww]=useState(false)
  return (
    <div className="App">
      <button onClick={()=>setstatus(!status)}>
        {(status) ? 'hide' : 'show'}
      </button>
      {
        (status)?
        <h1 className='para'>welcome to WS</h1>
       :
       ""
      }

      <h1 className='new'>This is is button if you are clicked then it is hide and show</h1>
      <button onClick={()=>setneww(!neww)}>
        {(neww) ? 'for hide click !!' : 'for show click'}
      </button>
      {
        (neww) ?
        <h1 className='hello'>welcom to priyanka blog</h1>
        :
        ""
      }

    </div>
  );
}

export default App;
