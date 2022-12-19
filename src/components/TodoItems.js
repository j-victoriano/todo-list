import {useState} from 'react';

const TodoItems = (props) => {

    const {todoList, setTodoList} = props;
    const checkbox = (e, index) => {
        //Changed it so it gets the copy of the list rather than changing the data itself
        //item.completed = !item.completed;
        //setTodoList([...todoList]);
        let copyList = [...todoList];
        let copyItem = copyList[index];
        copyItem.completed = e.target.checked;
        copyList[index] = copyItem;
        setTodoList(copyList);
    };

    const deleteItem = (index) => {
        let copyList = [...todoList];
        copyList.splice(index, 1);
        setTodoList(copyList);
    }
    return (
        <div>
            {
                todoList && todoList.map((item, index) => 
                    <div key={index}>
                        {
                            item.completed ?
                            <p style={{ textDecoration: 'line-through'}}>{item.Item}</p>:
                            <p>{item.Item}</p>
                        }
                        <input type="checkbox" value={item.completed} onChange ={ (e) => checkbox(e, index) }/>
                        <button style={{color: "white", backgroundColor: "red"}} onClick={ (e) => deleteItem(e, index)}>Remove Item</button>
                    </div>
                )
            }
        </div>
    )
}

export default TodoItems;