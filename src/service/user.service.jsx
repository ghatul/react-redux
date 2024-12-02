import request from './request.service';

class UserService {

 static login(data) {
    const url = 'http://localhost:4005/api/login'
    return new Promise((resolve, reject) => {
      request.save(url, data).then(result => {
        resolve(result);
      }).catch(err => {
        reject(err);
      })
    });
  }

  static register(data) {
    debugger
    const url = 'http://localhost:4005/api/registration';
    return new Promise((resolve, reject) => {
      request.save(url, data).then(result => {
        resolve(result);
      }).catch(err => {
        reject(err);
      })
    });
  }

  static getUserDetails() {
    const url = 'http://localhost:4005/api/dashboard'
    return new Promise((resolve, reject) => {
      request.fetch(url).then(result => {
        resolve(result);
      }).catch(err => {
        reject(err);
      })
    });
  }
}

export default UserService; 