import React from 'react';
import _ from 'lodash';
import UserService from './../service/user.service';

class LoginComponnet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      login: {
        email: '',
        password: ''
      },
      showErrMsg: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registration = this.registration.bind(this);
  }

  componentDidMount() {
    debugger
    const token = localStorage.getItem('token');
    if(token) {
      window.location.href = window.location.origin + '/dashboard';
    }
  }

  registration() {
    window.location.href = window.location.origin + '/registration';
  }

  handleChange(event) {
    let tempState = _.assign({}, this.state.login);
    if(event.currentTarget.name === 'email') {
      tempState.email = event.currentTarget.value;
    this.setState({login: tempState});
    }

    if(event.currentTarget.name === 'password') {
      tempState.password = event.currentTarget.value;
      this.setState({login: tempState});
    }
  
  }

  handleSubmit(e) {
    e.preventDefault();
    UserService.login(this.state.login).then(res => {
      if (res  && res.data && res.data.token) {
        localStorage.setItem('token', res.data.token);
        window.location.href = window.location.origin + '/dashboard';
      } else {
        window.location.href = window.location.origin
      }
    }).catch(err => {
       this.setState({showErrMsg: true});
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>User Name:</label>
          <input type="text" name="email" value={this.state.login.email} onChange={this.handleChange} />
          <label>Password:</label>
          <input type="text" name="password" value={this.state.login.password} onChange={this.handleChange} />
          {this.state.showErrMsg && <p>UserName or password incorrect</p>}
          <input type="submit" value="submit" />
        </form>
        <button onClick={this.registration} >registration</button>
      </div>
    )
  }

}

export default LoginComponnet;