import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import data from './data';

import Article from './Article';

function App() {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    const lastIndex = people.length - 1;
    if(index < 0) {
        setIndex(lastIndex);
    }
    if(index > lastIndex) {
        setIndex(0);
    }
    console.log(index);
  },[ index, people]);

  useEffect(()=>{
    let slider =    setInterval(()=>
        {setIndex(index + 1)},5000);
        return () => {clearInterval(slider)};
    },[index]);
  return (
      <section className='section'>
           <div className='title'>
               <h2>
                   <span>/</span>reviews
               </h2>
           </div>
          <div className="section-center">
              {people.map((person,personIndex)=>{                                

                  let position = 'nextSlide';
                  if(personIndex === index) {
                    position = 'activeSlide';
                  } 
                  if (personIndex === index - 1 ||
                     (index === 0 && personIndex === people.length - 1) ) 
                  {
                    position = 'lastSlide';
                  }
                  return (
                      <Article position={position} {...person} />
                  );
              })}
              <button className="prev"><FiChevronLeft onClick={()=>setIndex(index - 1)}/></button>
              <button className="next"><FiChevronRight onClick={()=>setIndex(index + 1)}/></button>
          </div>
      </section>
  );
}

export default App;