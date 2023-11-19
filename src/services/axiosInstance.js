import axios from 'axios';


export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
  showLoading: false
})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {

  console.log('request: ', config);
  if(config.showLoading) {
    // show loading ...
  }

  const access_token = window.localStorage.getItem('access_token');
  if(access_token) {
    config.headers['x-auth-token'] = access_token;
  }

  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
  console.log('response: ', response)
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, async function (error) {

  console.log('response error: ', error)
  // handle timeout
  if(error.code === "ECONNABORTED") {
    // code logic
    console.log('timeout')
    return;
  }

  // handle error
  switch (error.response?.status) {
    case 400: {
      // code logic
      console.log('400')
      break;
    }
    case 500: {
      // code logic
      console.log('500')
      break;
    }
    case 401: {
      // token expired
      const refresh_token = window.localStorage.getItem('refresh_token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1ODVjOTUzNDExYTZmYzkwMTc4MDc4IiwiZmlyc3ROYW1lIjoiZG9uZyIsImxhc3ROYW1lIjoibmd1eWVuIiwiZW1haWwiOiJ0cnVvbmdAZ21haWwuY29tIn0sImlhdCI6MTcwMDM3OTA4OCwiZXhwIjoxNzAwMzgyNjg4fQ.05j2xZh3R8jr4b77ZBHGTe67b4kg6VqEkgPKiDgKqoI';
      try {
        const result = await axiosInstance('/user/refresh-token', {
          method: 'POST',
          data: {
            data: {
              refresh_token
            }
          }
        })
        const access_token = result.data.data.access_token;
        axiosInstance.defaults.headers['x-auth-token'] = access_token;
        window.localStorage.setItem('access_token', access_token)
        // api A -> expire token -> api refresh token -> auto call api A
        return axiosInstance(error.config)
      } catch(e) {
        return Promise.reject(error);
      }
      break;
    }
    default: 
      break;
  }
 
  return Promise.reject(error);
});