import React from 'react';

const Todo = ({todo, index, deleteTodo,}) => {
    return (
        <>
        <p>{todo} <button onClick={() => deleteTodo(index)}>X</button></p>

        </>
    );
};
export default Todo