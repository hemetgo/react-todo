import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task)
  
    const handleSubmit = e => {
        e.preventDefault()
        editTodo(value, task.id)
        setValue("")
    }

    return (
        <form className='EditTodoForm' onSubmit= {handleSubmit} >

            <input type='text' 
            className='todo-input' value={value}
            placeholder='Edite sua tarefa' 
            onChange={ (e) => setValue(e.target.value) } />

            <button type='submit' className='todo-btn'>
                <FontAwesomeIcon icon={faCheck} />
            </button>

        </form>
    )
}

export default EditTodoForm
