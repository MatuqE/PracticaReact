import React, { useState } from "react";

export const TodoAdd = ({ handleSubmint }) => {

  const [newTodoApp, setNewTodoApp] = useState({
    id: new Date().getTime(),
    description: "",
    done: false,
  });

  const onNewTodoApp = ({ target }) =>{
    const { name, value } = target
    
        setNewTodoApp({
                ...newTodoApp,
                [ name ]: value
        })
  }

  return (
    <div>
      <form onClick={ (e) => e.preventDefault()  }>
        <input
          type="text"
          placeholder="¿Que hay que hacer?"
          className="form-control"
          name={ 'description' }
          onChange={ onNewTodoApp }
        />
        <button type="submint" className="btn btn-outline-primary mt-1" onClick={() => handleSubmint( newTodoApp ) }>
          Agregar
        </button>
      </form>
    </div>
  );
};
