import React from 'react';

import Task from './Task';

const Tasks = ({tasks, handleTaskCheck})=>{
    
    return (
        <>
            {tasks.map(task=>
            <Task task={task} handleTaskCheck={handleTaskCheck}/>
            )}
        </>
    )
}

export default Tasks;