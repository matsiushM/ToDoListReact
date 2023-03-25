import style from "./task.module.css"
import React, {useState} from "react";
import {ITask} from "../../model/model";


type TaskProps = {
    task: ITask;
    removeTask: Function;
}

export function Task({task, removeTask}: TaskProps) {

    const [checked, setChecked] = useState(false);

    const chkBgClassName = checked ? style.textChk : style.text;

    return (
        <div className={style.task}>
            <input type={"checkbox"}
                   className={style.checkbox}
                   checked={checked}
                   onClick={() => {
                       setChecked(rev => !rev);
                   }
                   }/>
            <p className={chkBgClassName}>{task.description}</p>
            <button
                className={style.taskButton}
                onClick={() => {
                    removeTask(task.id)
                }}>delete
            </button>
        </div>
    );
}