import React from 'react'

import { useCounter, useFetch } from '../hooks';
import { Quote } from '../03-examples/Quote';
import { LoadingMessage } from '../03-examples/LoadingMessage';


export const Layout = () => {
    const { counter, increment } = useCounter(1)
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`)
    const { author, quote } = !!data && data[0];




  return (
    <>
        <h1>Breaking bad Quotes</h1>
        <hr />

        {
            isLoading
             ? <LoadingMessage />
             : <Quote  author = { author } quote={ quote} />
        }
        

        <button onClick={()=> increment() }>Siguiente</button>
    
    </>
  )
}
