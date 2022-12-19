import {useState} from 'react';

const TodoForm = (props) => {
    const {todoList, setTodoList} = props;
    const formHandler = (e) => {
        e.preventDefault();

        // creating the new item here, the item and inputing that it hasnt been done 
        const newItem = {
            Item: e.target.newItem.value,
            completed: false
        }
        if (e.target.newItem.value === '') {
            return 0;
        }
        console.log(newItem);
        setTodoList([...todoList, newItem]);
        //clears the existing input fields
        e.target.newItem.value = "";
    }

    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={formHandler}>
                <label>Add New Task </label>
                <input type="text" name="newItem" placeholder="New Item"/>
                <input type="submit" value="Add Item"/>
            </form>
        </>
    )
}

export default TodoForm;