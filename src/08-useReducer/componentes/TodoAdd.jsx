import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleSubmit }) => {

  const [newTodo, setNewTodo] = useState({
    id: new Date().getTime(),
    description: "",
    done: false,
  });

  const onNewTodo = ({ target }) =>{
    const { name, value } = target
    
        setNewTodo({
                ...newTodo,
                [ name ]: value
        })
       
  }

  const { onResetForm } = useForm()

  return (
    <div>
      <form onClick={ (e) => { e.preventDefault() }}>
        <input
          type="text"
          placeholder="¿Que hay que hacer?"
          className="form-control"
          name={ 'description' }
          onChange={ onNewTodo }
        />
        <button 
        type="submint" 
        className="btn btn-outline-primary mt-1" 
        onClick={() => {handleSubmit( newTodo ), onResetForm()  }}>
          Agregar
        </button>
      </form>
    </div>
  );
};
