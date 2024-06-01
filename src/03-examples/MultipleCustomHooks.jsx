import React from 'react'
import useFetch from '../hooks/useFetch'

export const MultipleCustomHooks = () => {


    const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/2')

  return (
    <>
        <h1>Informacion de pokemon</h1>
        <hr />
        { isLoading && <p>Cargando.... </p>}
        {/* <pre> {JSON.stringify(data, null, 2)} </pre> */}
    
        <h2>{ data?.name}</h2>

        <button
            className='btn btn-primary mt-2'
        >
            Anterior
        </button>

        <button
            className='btn btn-primary mt-2'    
        >
            Siguiente
        </button>
    
    </>
  )
}
