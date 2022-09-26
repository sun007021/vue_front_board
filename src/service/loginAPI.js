import axios from 'axios'

const getUserInfo = (userId, userPw) => {
  const reqData = {
    'user_id': userId,
    'user_pw': userPw
  }

  let serverUrl = '//localhost:8000'

  return axios.post(serverUrl + '/api/users/login', reqData, {
    headers: {
      'Content-type': 'application/json'
    }
  })
}

export default {
  async doLogin(userId, userPw) {
    try {
      const getUserInfoPromise = getUserInfo(userId, userPw)
      const [userInfoResponse] = await Promise.all([getUserInfoPromise])
      if (userInfoResponse.data.length === 0) {
        return 'notFound'
      } else {
        localStorage.setItem('access_token', userInfoResponse.data.access_token)

        return userInfoResponse
      }
    } catch (err) {
      console.error(err)
    }
  }
}