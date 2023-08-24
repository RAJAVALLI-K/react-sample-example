import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './Todo.css'

const Todo = () => {
    const [inputData, setInputData] = useState({ name: "" });
    const [isUpdate, setIsUpdate] = useState(false);
    const [task, setTask] = useState([]);
    const [index, setIndex] = useState();

    const handle = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }

    let { name } = inputData;
    const handleSubmit = (e) => {
        e.preventDefault();
        setTask([...task, { name }]);
        setInputData({ name: "" });
    }
    console.log(task);
    const deleteData = (i) => {
        let total = [...task];
        total.splice(i, 1);
        setTask(total);
    }
    const updateData = (i) => {
        let { name, } = task[i];
        setInputData({ name });
        setIsUpdate(true);
        setIndex(i);
    }
    const updateInfo = () => {
        let total = [...task];
        total.splice(index, 1, { name });
        setTask(total);
        setInputData({ name: '' });
        setIsUpdate(false);
    }


    return (
        <div>
            <div className='inputs'>
                <h1>Todo</h1>
                <div>
                    <input
                        name='name'
                        placeholder='Enter Your Todo List'
                        value={inputData.name || ""}
                        onChange={handle}
                    />
                    <button onClick={!isUpdate ? handleSubmit : updateInfo}>{!isUpdate ? `Add` : `Update Data`}</button>
                </div>
            </div>
            {
                task.map((n, i) => {
                    return (
                        <div key={i} className='details'>
                            <p>{n.name}</p>
                            <IconButton aria-label="delete" onClick={() => deleteData(i)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton onClick={() => updateData(i)}>
                                <EditIcon />
                            </IconButton>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Todo