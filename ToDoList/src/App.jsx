import { useState } from "react"
import AddTaskModal from "./AddTaskModal"
import List from "./List"

// const taskList=[
//   {
//     id:1,
//     task:"Estudiar",
//     location: 'Escuela',
//     limit:"15:00",
//     description: 'Estudiar para el examen de cálculo',
//     isDone: false
//   },
//   {
//     id:2,
//     task:"Practicar",
//     location: 'Campo',
//     limit:"18:00",
//     description: 'Practicar para el próximo partido',
//     isDone: false
//   },
//   {
//     id:3,
//     task:"Dormir",
//     location: 'Casa',
//     limit:"23:00",
//     description: 'Dormir temprano para llegar a tiempo a mi examen',
//     isDone: false
//   },
// ]

function App() {
  const [taskList,setTaskList] = useState( 
    JSON.parse(localStorage.getItem('taskList')) || []
  )

  if (taskList.length === 0){
    localStorage.setItem('taskList', JSON.stringify([]))
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
    <hr/>
      <List taskList={taskList}/>
    <hr />
    <div className="text-end">
      <AddTaskModal taskList={taskList} setTaskList={setTaskList}/>
        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          data-bs-toggle="modal"
          data-bs-target="#addTaskModal">
            <i className="bi bi-plus-lg"></i>
            Add
      </button>
    </div>   
  </div>
  )
}

export default App