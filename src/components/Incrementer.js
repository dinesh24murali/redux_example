import React from 'react';

export default function Incrementer({
   number,
   increment,
   decrement,
   makeApiCall,
}) {

   const increaseCount = () => {
      increment();
   }

   const decrementCount = () => {
      decrement();
   }

   const makeCall = () => {
      makeApiCall();
   };

   return <div style={{ textAlign: 'center' }}>
      <h1>{number}</h1>
      <button style={{ fontSize: '36px', marginRight: '10px' }} onClick={increaseCount}>
         &#8657;
      </button>
      <button style={{ fontSize: '36px' }} onClick={decrementCount}>
         &#8659;
      </button><br></br>
      <button style={{ fontSize: '16px', marginRight: '10px', marginTop: '10px' }} onClick={makeCall}>
         Make Api Call
      </button>
   </div>;
}
