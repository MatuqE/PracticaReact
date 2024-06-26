import React, { useState } from 'react'

export const useCounter = ( initialValue ) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) =>{
      setCounter( counter + value )
    }
    
    const decrement = ( value = 1 ) =>{
      counter <= 0 ? setCounter(0) : setCounter( counter - value )
    }

    const reset = () =>{
      setCounter( initialValue )
    }

  return {

      counter,
      increment,
      decrement,
      reset,
  }
}