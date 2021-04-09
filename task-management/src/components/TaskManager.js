import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Userprofile from "../pages/UserProfile";
import Tasks from "../pages/Tasks";
import CreateTasks from "../pages/CreateTasks";


function TaskManager(props){
  return (
    <Router>
      <Navbar handleLogout={props.handleLogout}/>
      <Switch>
        <Route path="/user-profile" exact component={Userprofile}></Route>
        <Route path="/view-tasks" exact component={Tasks}></Route>
        <Route path="/" exact component={Tasks}></Route>
        <Route path="/create-tasks" exact component={CreateTasks}></Route>
        <Route path="/create-tasks/:taskId" exact component={CreateTasks}></Route>
      </Switch>
    </Router>
  )
}

export default TaskManager;