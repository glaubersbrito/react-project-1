import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';

import './Task.css';

const Task = ({task, handleTaskCheck, handleTaskRemotion}) => {
    return ( 
        <div className="task-container" style={task.completed ? {borderLeft:"6px solid chartreuse"} : {}}>
            <div className="task-title" onClick={()=>handleTaskCheck(task.id)}> 
                {task.title}
            </div>
            <div 
            className="buttons-container">
                
                <button 
                className="task-details-button" 
                >
                    <CgInfo />
                </button>
                
                <button 
                className="remove-task-button" 
                onClick={()=>handleTaskRemotion(task.id)}>
                    <CgClose />
                </button>
                
            </div>
        </div>
    );
}
 
export default Task;