import React, { useState } from 'react';
import Todo from './Todo'

const Form = () => {
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([])

    const handleChange = e => setTodo({ [e.target.name]: e.target.value })


    const handleClick = e => {

        setTodos([...todos, todo])
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }

    return (

        <>
            <form onSubmit={e => e.preventDefault()}>
                <input type='text' name='todo' onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
            </form>
            {
                todos.map((value, index) => (
                    <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo} />
                ))
            }
            <p>{todos.length} item left</p>
        </>
    )


}

export default Form

/*
mport React, { useState } from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//{ setCaja([...caja, tarea]) }} clonado y adicionar valor (tarea)
//
function App() {
    const [caja, setCaja] = useState([]) // almacena es un arreglo, ej:const contenedor = [5]
    const [tarea, setTarea] = useState("") // recibe las tareas del value del input
    const [eliminar, setElimina] = useState()
    return (
        <>
            <input className="ingreso" type="text" placeholder="Ingrese la tarea..." onChange={(evento) => { setTarea(evento.target.value) }} />
            <button className="add" onClick={() => { setCaja([...caja, tarea]) }}>Añadir</button>
            <p className="mostrar" dangerouslySetInnerHTML={{ __html: caja.join("<br>") }}></p>
        </>
    );
}
export default App;
*/