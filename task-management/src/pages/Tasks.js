import React,{useState,useEffect} from 'react';
import * as BIIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
function Tasks(props) {
    const authToken = localStorage.getItem("authToken");
    const [tasks, setTasks] = useState([]);

    /**
        Fetch tasks when component is mounted
     */
    useEffect(() => {
        fetchTasks();
    }, []);

    /**
        Server call to fetch tasks
     */
    const fetchTasks = async function(){

        const paginationLimit = document.getElementsByName("limit")[0].value;
        const paginationSkip = document.getElementsByName("skip")[0].value;

        const response = await fetch(`/tasks?limit=${paginationLimit}&skip=${paginationSkip}`,{
            method: 'GET', 
            headers: {
            'Content-Type': 'application/json',
             Authorization: authToken
            },
        });
        const taskData = await response.json();
        if(taskData.error){
            alert(taskData.error);
        }
        else{
            setTasks(taskData);
        }
    }

    /**
        Server call to delete task by taskId
     */
    const deleteTask = async function(e){
        const taskId = e.currentTarget.getAttribute("data-task-id");
        const response = await fetch(`/tasks/${taskId}`,{
            method: 'DELETE', 
            headers: {
            'Content-Type': 'application/json',
             Authorization: authToken
            },
        });
        const taskData = await response.json();
        if(taskData.error){
            alert(taskData.error);
        }
        else{
            fetchTasks();
        }
    }

    /**
        Navigates to update task page
     */
    const editTask = function(e){
        const taskId = e.currentTarget.getAttribute("data-task-id");
        props.history.push(`/create-tasks/${taskId}`);
    }


    return (
        <div className="tasks common-margin">
            <h1 className="common-center-align-content">Tasks</h1>
            <div className="tasks-search-criteria">
                <div>
                    <div><strong>Pagination Criteria:</strong></div>
                    <div className="row">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"> 
                            <label>Limit:</label>
                            <input type = "number" name="limit" class="form-control"/>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"> 
                            <label>Skip:</label>
                            <input type = "number" name="skip" class="form-control"/>
                        </div>
                        <BIIcons.BiRefresh className="common-icons pagination-refresh" onClick={fetchTasks}/>
                    </div>
                </div>
            </div>
            <table className="task-table table table-dark">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Owner</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {tasks.map((task,index)=>{
                    return(<tr>
                        <td>{task['description']}</td>
                        <td>{task['owner']}</td>
                        <td>{task['createdAt']}</td>
                        <td>{task['updatedAt']}</td>
                        <td>{task['completed']?"Yes":"No"}</td>
                        <td>
                            <div className="task-action">
                                <BIIcons.BiEditAlt className="common-icons" data-task-id = {task["_id"]} onClick={editTask}/>&nbsp;&nbsp;&nbsp;
                                <MdIcons.MdDelete className="common-icons" data-task-id = {task["_id"]} onClick={deleteTask}/>
                            </div>
                        </td>
                    </tr>)
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Tasks;
