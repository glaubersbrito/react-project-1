import React, { useState } from 'react';
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
  
  const handleTaskAddition = (taskTitle)=>{
    const newTasks = [... tasks, {
      title: taskTitle,
      id: Math.random(10),
      completed: false,
    }];
    setTasks(newTasks);
  }

  return (
  <>
  <div className='container'>
    <AddTask handleTaskAddition={handleTaskAddition}/>
    <Tasks tasks={tasks}/>
    
  </div>
  
  </>)
}

export default App;