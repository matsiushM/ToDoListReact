import style from "./TaskImput.module.css"
import React, {useState} from "react";

interface TaskImputProps {
    addTask: Function;
}

    const TaskInput = ({addTask}: TaskImputProps) => {

    const [text, setText] = useState('');

    return (
        <div className={style.inputBlock}>
            <input value={text} onChange={e => setText(e.target.value)} type="text"
                   placeholder="Write your task..."
                   onKeyDown={(e) => {
                       if(e.key === "Enter") {
                           addTask(text);
                           setText("");
                       }
                   }}/>

            <button onClick={() => {
                addTask(text);
                setText("");
            }}
            > create
            </button>
        </div>
    );
}

export default TaskInput;