import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom"

function CreateTasks(props) {
    const authToken = localStorage.getItem("authToken");
    const {taskId} = useParams();
    const [description, setdescription] = useState("");
    const [completed, setcompleted] = useState(false);

    /**
        If taskId is present fetch task details by its Id
     */
    useEffect(() => {
        if(taskId){
            fetchTaskById();
        }
    },[])

    /**
        server call to fetch task by taskId
     */
    const fetchTaskById = async function(){
        const response = await fetch(`/tasks/${taskId}`, {
            method: 'GET', 
            headers: {
            'Content-Type': 'application/json',
             Authorization: authToken
            },
        });
        const taskData = await response.json();
        if(taskData.error){
            alert(taskData.error);
        }else{
            setdescription(taskData.description);
            setcompleted(taskData.completed);   
        }
    }
    
    /**
        Server call to update task
     */
    const updateTask = async function(e){
        e.preventDefault();
        const taskData = {
            description:e.target.description.value,
            completed:e.target.completed.value
        }
        const response = await fetch(`/tasks/${taskId}`, {
            method: 'PATCH', 
            headers: {
            'Content-Type': 'application/json',
             Authorization: authToken
            },
            body: JSON.stringify(taskData)
        });

        const task = await response.json();
        if(task.error){
            alert(task.error);
        }else{
           props.history.push("/view-tasks");
        }
    }

    /**
        Server call to create new task
     */
    const createTask = async function(e){
        e.preventDefault();
        const taskData = {
            description:e.target.description.value,
            completed:e.target.completed.value
        }
        const response = await fetch('/tasks', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
             Authorization: authToken
            },
            body: JSON.stringify(taskData)
        });

        const task = await response.json();
        if(task.error){
            alert(task.error);
        }else{
            props.history.push("/view-tasks");
        }

    }

    /**
        Handlers for description and completed fields
     */
    const handleDescriptionOnChange = function(e){
        setdescription(e.currentTarget.value);
    }
    const handleOnChangeCompleted = function(){
        setcompleted(!completed);
    }
    return (
        <div className="create-tasks common-margin">
            <h1 className="common-center-align-content">Create Task</h1>
            <form onSubmit = {taskId ? updateTask : createTask}>
                <div class="form-group row">
                    <label class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-form-label">Description</label>
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <textarea type="text" class="form-control" name="description" placeholder="Description" 
                        value={description} onChange={handleDescriptionOnChange}></textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-form -label">Completed</label>
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="completed" id="completed-true" value="true" checked={completed} onChange={handleOnChangeCompleted}/>
                            <label class="form-check-label">Yes</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="completed" 
                            id="completed-false" value="false" checked={!completed} onChange={handleOnChangeCompleted}/>
                            <label class="form-check-label">No</label>
                        </div>
                    </div>
                </div> 
                <div class="form-group row">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <button class="btn btn-primary">Save</button>
                    </div>
                </div>   
            </form>
        </div>
    )
}

export default CreateTasks;
