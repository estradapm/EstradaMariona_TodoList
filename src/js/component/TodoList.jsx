import React, { useState } from 'react';

const TodoList = () => {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = (event) => {
        if (event.key === 'Enter' && inputValue) {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div>
            <h1>TO DO LIST</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={addTask}
            />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;