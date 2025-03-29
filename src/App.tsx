import { useState } from "react";
import styles from "./App.module.css"

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import {ITask} from "./Interfaces/Task";
import Modal from "./Components/Modal";

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

const deletetask = (id: number) => {
  setTaskList(
    taskList.filter(task => {
      return task.id !== id;
    })
  )
}

const hideOrShowModal = (display: boolean) =>{
  const modal = document.querySelector("#modal")
  if(display){
    modal!.classList.remove("hide");
  }else{
    modal!.classList.add("hide");
  }
};

const editTask = (task: ITask):void => {
  hideOrShowModal(true);
  setTaskToUpdate(task);
};

const updateTask = (id: number, title: string, difficulty: number) => {
  const updatedTask: ITask = {id, title, difficulty}

  const updateItems = taskList.map((task) =>{
    return task.id === updatedTask.id ? updatedTask : task
  })

  setTaskList(updateItems);

  hideOrShowModal(false);
}

  return (
   <div>
    <Modal children={<TaskForm btnText="Editar Tarefa" taskList={taskList} task={taskToUpdate} handleUpdate={updateTask}/>}/>
      <Header/>
        <main className={styles.main}><h1>Conteúdo...</h1>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deletetask} handleEdit={editTask}/>
        </div>
        </main>
      <Footer/>
   </div>
  );
}

export default App;
