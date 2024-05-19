import Swal from "sweetalert2"
// import withReactContent form
import uuidv4 from "uuid"

const taskInfo = {
    task: '',
    description: '',
    location: '',
    limit: ''
}

const AddTaskModal = ({taskList}) => {
    const [values, handleInputChange, reset] = useForm(taskInfo)
    
const handleSaveClick = () => {
        setTaskList([...taskList, {
            id: uuidv4(), 
            ...values,
            done: false
        }])

    localStorage.setItem('taskList', JSON.stringify(taskList))

    reset()

    alert('Task added')
    }

    return (
        <div className="modal fade" id={"addTaskModal"}>
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="addTaskModal">Add New Task </h5>
            <button type="button"
            className="btn-close"
            data-bs-dismiss="modal">
            </button>
            </div>
            <div className="modal-body container">
            <div className="modal-body container">
                <div className="row text-start">
                <div className="col">
                    <label 
                        className="form-label" 
                        htmlFor="task"
                        >Task</label>
                    <input 
                    className="form-control"
                    id="task"
                    name="task"
                    onChange={handleInputChange}
                    type="text"
                    value={values.task}
                    />
                    <label 
                        className="form-label" 
                        htmlFor="description"
                        >Description</label>
                    <textarea
                    className="form-control"
                    id="description"/>

                    <label 
                        className="form-label" 
                        htmlFor="location"
                        >Location</label>
                    <input 
                    className="form-control"
                    id="location"/>

                    <label 
                        className="form-label" 
                        htmlFor="limit"
                        >Limit time</label>
                    <input 
                    className="form-control"
                    id="limit"
                    name="limit"
                    onChange={handleInputChange}
                    type="time"
                    value={values.limit}/>
                </div>
                </div>
                </div>
            </div>
            <div className="modal-footer">
                <button 
                    className='btn btn-sm btn-outline-primary'
                    onClick={handleSaveClick}
                    data-bs-dismiss="modal"
                >
                <i className="bi bi-pencil-square"></i>
                Save
                </button>
                <button 
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    data-bs-dismiss="modal"
                >Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal