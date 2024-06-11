import React from 'react'
import { BrowserRouter } from "react-router-dom"

// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea/Padre'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { TodoApp } from './08-useReducer/TodoApp'
// import './08-useReducer/intro-reducer'
import { MainApp } from './09-useContext/MainApp'

export const HooksApp = () => {
  return (
    <>
      <BrowserRouter>
        <MainApp/>
      </BrowserRouter>
    </>
  )
}
