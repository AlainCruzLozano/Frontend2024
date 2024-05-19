import ListItem from "./ListItem"
const List=({tasklist, setTaskList})=>{

return (  
    <>   
    <div className="row">
      <div className="col-6">
        <h4> Tasks</h4>
      </div>
      <div className="col-3">
        <h4>Limit </h4>
      </div>
      <div className="col">
        <h4>Location</h4>
      </div>
    </div>
    {
        tasklist.map((task)=>(
                <ListItem
                key={task.id}
                task={task}
                taskList={taskList}
                setTaskList={setTaskList}
                />          
        )
    )
    }
    </>
  )
}

export default List