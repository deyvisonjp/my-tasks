import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Tasks = props => (
  <tr>
    <td>{props.task.title}</td>
    <td>{props.task.description}</td>
    <td>{props.task.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.task._id}>edit</Link> | <a href="#" onClick={() => { props.deleteTask(props.task._id) }}>delete</a>
    </td>
  </tr>
)

export default class TasksList extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this)
    this.state = {tasks: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3333/tasks/')
      .then(response => {
        this.setState({ tasks: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTask(id) {
    axios.delete('http://localhost:5000/tasks/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      tasks: this.state.tasks.filter(el => el._id !== id)
    })
  }

  taskList() {
    return this.state.tasks.map(currentTask => {
      return <Tasks task={currentTask} deleteTask={this.deleteTask} key={currentTask._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Tarefas Cadastradas</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Título</th>
              <th>Descrição</th>
              <th>Data Limite</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            { this.taskList() }
          </tbody>
        </table>
      </div>
    )
  }
}