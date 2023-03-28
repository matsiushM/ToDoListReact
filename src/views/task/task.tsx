import style from "./task.module.css"
import React, {useState} from "react";
import {ITask} from "../../types/types";


interface TaskProps {
    task: ITask;
    removeTask: Function;
    taskDone: Function;
}

const Task = ({task, removeTask, taskDone}: TaskProps) => {

    const [checked, setChecked] = useState(task.done);

    const chkBgClassName = task.done ? style.textChk : style.text;

    const handlRemoveTask = () => {
        removeTask(task.id);
    };

    const hendlCheckedTask = () => {
        taskDone(task.id);
        setChecked(task.done);
    };

    return (
        <div className={style.task}>
            <input type={"checkbox"}
                   className={style.checkbox}
                   checked={checked}
                   onClick={() => {
                       hendlCheckedTask()
                   }}/>
            <p className={chkBgClassName}>{task.description}</p>
            <button
                className={style.taskButton}
                onClick={() => {
                    handlRemoveTask()
                }}>delete
            </button>
        </div>
    );
};

export default Task;