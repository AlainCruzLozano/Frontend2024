const ShowItemModal = ({task}) => {
    return (
        <div className="modal fade" id={"showItemModal" +task.id}>
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="showItemModalLabel">{task.task}
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
                <button className='btn btn-sm btn-outline-danger'>
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