import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import './App.css';
import AddTask from './components/addTask';
import Tasks from './components/Tasks';

const App = () =>{
  const [tasks, setTasks] = useState([
    {
      id:'1',
      title:'Code and compile',
      completed:false,
    },
    {
      id:'2',
      title:'Do the homework',
      completed:false,
    },
    {
      id:'3',
      title:'Conquer a medal',
      completed:true,
    },
    {
      id:'4',
      title:'Lose weight',
      completed:false,
    }
  ]

  );

  const handleTaskCheck = (taskId) => {
    const newTasks = tasks.map(task =>{
      if (task.id === taskId)
      return {
        ... task, completed: !task.completed
        
      }
      return task;
    });
    setTasks(newTasks)
  };
   
  
  
  const handleTaskAddition = (taskTitle)=>{
    const newTasks = [... tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }];
    setTasks(newTasks);
  }

  return (
  <>
  <div className='container'>
    <AddTask handleTaskAddition={handleTaskAddition}/>
    <Tasks tasks={tasks} handleTaskCheck={handleTaskCheck}/>
    
  </div>
  
  </>)
}

export default App;