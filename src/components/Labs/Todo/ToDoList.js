import TodoItem from "./ToDoItem";
import todos from "./todos.json";
import React from "react";

const TodoList = () => {
    return(
        <>
        <h3>To Do List</h3>
        <ul>
            {
        todos.map(todo => {
            return(<TodoItem todo={todo}/>);
        })
    }
        </ul>
            </>
    );
}
export default TodoList;