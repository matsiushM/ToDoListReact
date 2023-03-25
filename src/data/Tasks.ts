import {ITask} from "../model/model";
import {v4 as uuidv4} from "uuid";


export const tasks: ITask[] = [];

export function addTask(text: string){
    const newTask = {
        id: uuidv4(),
        description: text,
        done: true,
    };

    tasks.push(newTask);
}