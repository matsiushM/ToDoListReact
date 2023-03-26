import React, {useState} from 'react';
import style from "./App.module.css";
import Task from "../task/task";
import TaskInput from "../taskIput/TaskImput"
import {ITask} from "../../types/types";
import {v4 as uuidv4} from "uuid";


const App = () => {

    const [tasks, setTask] = useState<ITask[]>([]);

    const addTask = (text: string) => {
        if (text === "") {return}
            if (!tasks.find(task => task.description === text)) {
                const newTask = {
                    id: uuidv4(),
                    description: text,
                    done: false,
                };
                setTask([...tasks, newTask]);
            };
    };

    const removeTask = (id: string) => {
        const newTask = tasks.filter(task => task.id !== id);
        setTask(newTask);
    }

    return (
        <div className={style.container}>
            <div className={style.home}>
                <h1>Todo List</h1>
                <TaskInput addTask={addTask}/>
                {tasks.map(task => <Task task={task} removeTask={removeTask} key={task.id}/>)}
            </div>
        </div>
    );
};

export default App;
