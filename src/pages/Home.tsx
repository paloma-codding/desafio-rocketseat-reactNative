import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
   if(newTaskTitle !== ''){
     const data = {
       id: new Date().getTime(),
       title: newTaskTitle,
       done: false
     }
     setTasks([...tasks, data]);
   }
  }

  function handleMarkTaskAsDone(id: number) {
    const updateTask = tasks.map(
      task => task.id === id ?{
        id: task.id,
        title: task.title,
        done: !task.done
       } : task)
      console.log(updateTask)
        setTasks(updateTask)
  }

  function handleRemoveTask(id: number) {
    setTasks(oldTasks => oldTasks.filter(
      task => task.id !== id
    ))
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}