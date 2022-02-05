import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement, makeApiCall } from './slices/appSlice';

export default function Incrementer() {

   const dispatch = useDispatch();
   const number = useSelector(state => state.app.number)

   const increaseCount = () => {
      dispatch(increment());
   }

   const decrementCount = () => {
      dispatch(decrement());
   }

   const makeCall = () => {
      dispatch(makeApiCall());
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
