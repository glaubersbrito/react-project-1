import React from 'react';

import Task from './Task';

const Tasks = ({tasks, handleTaskCheck, handleTaskRemotion})=>{
    
    return (
        <>
            {tasks.map(task=>
            <Task 
            task={task} 
            handleTaskCheck={handleTaskCheck}
            handleTaskRemotion={handleTaskRemotion}/>
            )}
        </>
    )
}

export default Tasks;