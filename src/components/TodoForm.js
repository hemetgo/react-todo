import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")
  
    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)
        setValue("")
    }

    return (
        <form className='TodoForm' onSubmit= {handleSubmit} >

            <input type='text' 
            className='todo-input' value={value}
            placeholder='Qual sua tarefa?' 
            onChange={ (e) => setValue(e.target.value) } />

            <button type='submit' className='todo-btn'>
                <FontAwesomeIcon icon={faCheck} />
            </button>

        </form>
    )
}

export default TodoForm
