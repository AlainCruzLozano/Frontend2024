const ShowItemModal = ({task, taskList, setTaskList}) => {
const handleDeleteClick = () => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            const newTaskList = taskList.filter((taskItem)=>taskItem.id !== task.id)
            localStorage.setItem('taskList', JSON.stringify(newTaskList))
            setTaskList(newTaskList)

          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted.",
            icon: "success"
          });
        }
      });
   
}
    return (
        <div className="modal fade" id={"showItemModal" +task.id}>
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="showItemModalLabel">({task.id}){task.task}
            </h5>
            <button type="button"
            className="btn-close"
            data-bs-dismiss="modal">
            </button>
            </div>
            <div className="modal-body container">
                <p className="row">
                    {task.description}
                </p>
                <div className="row">
                    <div className="col text-center">
                        <i className="bi bi-geo-alt-fill"></i> {task.location}
                    </div>
                    <div className="col text-center">
                        <i className="bi bi-clock-fill"></i> {task.limit}
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button 
                className='btn btn-sm btn-outline-danger'
                onClick={handleDeleteClick}
                data-us-dismiss="modal"
                >
                <i className="bi bi-trash"></i>
                Delete
            </button>
                <button className='btn btn-sm btn-outline-primary'>
                <i className="bi bi-pencil-square"></i>
                Edit
            </button>
                <button type="button"
                className="btn btn-sm btn-outline-secondary"
                data-bs-dismiss="modal"
                >Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ShowItemModal