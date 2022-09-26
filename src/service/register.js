import axios from 'axios';

// 내가 짜본 register code
function register(userData){
  
    let serverUrl = '//localhost:8000'
  
    return axios.post(serverUrl + '/user/register', userData, {
      headers: {
        'Content-type': 'application/json'
      }
    })
  }
  export{register};
  //