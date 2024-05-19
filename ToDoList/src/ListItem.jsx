import React from "react"
import ShowItemModal from "./ShowItemModal"
const ListItem  =({task,taskList,setTaskList})=>{
    return(
    <>
    <div className="row m-2">
    <div className="col-6">
        <ShowItemModal task={task} taskList={taskList} setTaskList={setTaskList}/>
    <button className="btn btn-link"
    data-bs-toggle="modal"
    data-bs-target={"#showItemModal" +task.id}
    >{task.task}</button>
    </div>
<div className='col-3'>
{task.limit}
</div>
<div className='col'>
{task.location}

</div>
</div>
</>
    )
}
export default ListItem