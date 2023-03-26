import style from "./TaskImput.module.css"
import React, {useState} from "react";

interface TaskImputProps {
    addTask: Function;
}

const TaskInput = ({addTask}: TaskImputProps) => {

    const [text, setText] = useState('');

    const handleKeyDown = (text: string) => {
        if (text === "Enter") {
            addTask(text);
            setText("");
        }
    }

    const handOnClick = (text: string) => {
        addTask(text);
        setText("");
    }

    return (
        <div className={style.inputBlock}>
            <input value={text} onChange={e => setText(e.target.value)} type="text"
                   placeholder="Write your task..."
                   onKeyDown={(e) => {
                       handleKeyDown(e.key);
                   }}/>

            <button onClick={() => {
                handOnClick(text);
            }}
            > create
            </button>
        </div>
    );
};

export default TaskInput;