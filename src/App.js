import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CreateUser from "./components/CreateUser";
import TasksList from "./components/TasksLists";
import CreateTasks from "./components/CreateTasks";
import Updatetask from "./components/UpdateTask";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/user" component={CreateUser} />
        <Route path="/create" component={CreateTasks} />
        <Route path="/" exact component={TasksList} />
        <Route path="/edit/:id" component={Updatetask} />
      </div>
    </Router>
  );
}

export default App;
