import React from 'react';
import './Task.css';

const Task = ({task, handleTaskCheck}) => {
    return ( 
        <div className="task-container" style={task.completed ? {borderLeft:"6px solid chartreuse"} : {}}>
            <div className="task-title" onClick={()=>handleTaskCheck(task.id)}> 
                {task.title}
            </div>
        </div>
    );
}
 
export default Task;