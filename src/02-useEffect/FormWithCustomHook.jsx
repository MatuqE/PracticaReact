import React, { useState } from 'react'
import { useEffect } from 'react'
import { Message } from './Message'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

    

    const { formState, onInputChange, onResetForm , userName, email, password  } = useForm({

            userName: '',
            email: '',
            password: ''
    })

    // const { userName, email, password } = formState


  return (
    <>
        <h1>FormWithCustomHook</h1>
        <hr />

        <h1> {userName} y {email}</h1>
        <input 
        type="text"
        className='form-control'
        placeholder='Username'
        name='userName' 
        value={ userName }
        onChange={ onInputChange }
        />

        <input 
        type="email"
        className='form-control mt-2'
        placeholder='matias@google.com'
        name='email' 
        value={ email }
        onChange={ onInputChange }
        />

        <input 
        type="password"
        className='form-control mt-2'
        placeholder='Contraseña'
        name='password' 
        value={ password }
        onChange={ onInputChange }
        />


        {
            (userName === 'strider2') && <Message/>
        }

        <button onClick={ onResetForm } className='btn btn-primary mt-2'>Borrar</button>
    </>
  )
}
