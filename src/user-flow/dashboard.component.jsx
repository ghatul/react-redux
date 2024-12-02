import React from 'react';
import UserService from './../service/user.service';

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      showErrMsg: false,
    };
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.removeItem('token');
    window.location.href = window.location.origin;
  }

  componentDidMount() {
    UserService.getUserDetails().then(result => {
      this.setState({userList: result.data})
    }).catch(err => {
       this.setState({showErrMsg: true});
    })
  }

  render() {
    const { userList } = this.state;
    return (
      <div>
        <button onClick={this.logout}>logout</button>
        <div>Dashboard</div>
        {userList.map(item => <span>{item.first_name}</span>)}
        {this.state.showErrMsg && <span>Something went wrong</span>}
      </div>
    )
  }

}

export default DashboardComponent;