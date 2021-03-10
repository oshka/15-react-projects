import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor]= useState('');
  const [error, setError]= useState(false);

  const [list, setList]= useState(new Values('#336699').all(10));

  const handleSubmit =(e) => {
    e.preventDefault();
    try{
      let colors = new Values(color).all(10);
      setList(colors);
    } catch(error) {
      setError(true);
      console.log(error);
    }     
  }


  return (
  <>
  <section className="container">
    <h3>color geberator</h3>
    <form onSubmit={handleSubmit} >
      <input  type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="#336699" className={`${error? 'error' : null}`}/>
      <button className="btn" type="submit">submit</button>
    </form>
  </section>
  <section className="colors">
    <h4>list goes here</h4>
    {list.map((color, index)=>{
      
      return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
    })}
  </section>
  </>
  );
}

export default App
