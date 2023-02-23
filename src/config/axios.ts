
import axios from 'axios';

const setAuthHeaders = (config) => {
  if(!!localStorage.getItem("bnh_api_jwt")) {
    config.headers["Authorization"] = localStorage.getItem("bnh_api_jwt")
  }
}

const persistAuthHeadersInLocalStorage = (headers) => {
  if(!!headers["authorization"]) {
    localStorage.setItem("bnh_api_jwt", headers["authorization"])
  }
}

// Config defaults
//----------------------------
// Config baseURL
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

axios.defaults.headers.common["Accept"] = "application/json"
axios.defaults.headers.common["Content-Type"] = "application/json"
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'


// Request interceptor
axios.interceptors.request.use(config => {
  setAuthHeaders(config)
  return config
})

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    if(!response.data) return response
    if(response.headers) {
      persistAuthHeadersInLocalStorage(response.headers)
    }
    return response
  },
  (error) => {
    // Do something with response error
    console.log('error.response on configs/axios.js', error.response)
    if( error.response.status === 401) {
      window.location.href = '/login'
      localStorage.removeItem('bnh_api_jwt')
    }
    return Promise.reject(error.response)
  }
)


// Public axios
//----------------------------
export default axios
