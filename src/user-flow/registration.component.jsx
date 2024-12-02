import React from 'react';
import _ from 'lodash';
import UserService from './../service/user.service';

class RegistrationComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      registration: {
        first_name: '',
        last_name: '',
        mobile_number: '',
        password: '',
        email: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let tempState = _.assign({}, this.state.registration);
    if(e.currentTarget.name === 'first_name') {
      tempState.first_name = e.currentTarget.value;
    }
    if(e.currentTarget.name === 'last_name') {
      tempState.last_name = e.currentTarget.value;
    }
    if(e.currentTarget.name === 'mobile_number') {
      tempState.mobile_number = e.currentTarget.value;
    }
    if(e.currentTarget.name === 'email') {
      tempState.email = e.currentTarget.value;
    }
    if(e.currentTarget.name === 'password') {
      tempState.password = e.currentTarget.value;
    }
    this.setState({registration: tempState});
  }

  handleSubmit(e) {
    e.preventDefault();
    UserService.register(this.state.registration).then( result => {
    window.location.href = window.location.origin;
    }).catch(err => {
     console.log(err);
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
         <label>First Name</label><input type="text" name="first_name" value={this.state.registration.first_name} onChange={this.handleChange} />
         <label>Last Name</label><input type="text" name="last_name" value={this.state.registration.last_name} onChange={this.handleChange} />
         <label>Mobile Number</label> <input type="text" name="mobile_number" value={this.state.registration.mobile_number} onChange={this.handleChange} />
         <label>Email</label><input type="text" name="email" value={this.state.registration.email} onChange={this.handleChange} />
         <label>Password</label><input type="text" name="password" value={this.state.registration.password} onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }

}

export default RegistrationComponent;