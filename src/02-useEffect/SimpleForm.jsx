import React, { useState } from 'react'
import { useEffect } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        userName: 'strider',
        email: 'fernando@google.com'
    })

    const { userName, email } = formState

    const onInputChange = ({ target }) =>{
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    // useEffect(() => {
    //   console.log('el useEffect se llamo')
    // }, [])

    // useEffect(() => {
    //   console.log('formState Changed!!')
    // }, [formState])

    // useEffect(() => {
    //   console.log('email Changed!!!!')
    // }, [email])
    

  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <h1> {userName} y {email}</h1>
        <input 
        type="text"
        className='form-control'
        placeholder='Username'
        name='userName' 
        onChange={ onInputChange }
        />

        <input 
        type="email"
        className='form-control mt-2'
        placeholder='matias@google.com'
        name='email' 
        onChange={ onInputChange }
        />

        {
            (userName === 'strider2') && <Message/>
        }
    </>
  )
}
