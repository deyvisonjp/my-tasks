import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
    }

    console.log(user);

    axios.post('http://localhost:3333/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      email: '',
    })
  }

  render() {
    return (
      <div>
        <h3>Crie seu usuário</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Nome Completo: </label>
            <input  
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group"> 
            <label>E-mail: </label>
            <input  
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Criar" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}