import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {

  const { user, logUsuario } = useContext(UserContext)
  console.log(user)

  return (
    <>
        <h1>Login Page</h1>
        <hr />

        <pre>
          { JSON.stringify(user,null,3)}
        </pre>

        <button
          className='btn btn-primary'
          onClick={ () =>{ logUsuario({ id: 123, name: 'Juan', email: 'juan@gmail.com'})}}
        >
          Establecer Usuario
        </button>
    </>
  )
}
