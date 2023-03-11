import axios from 'axios'
// import api from './api'

export const getList = () => {
  return new Promise((resolve) => {
    axios.post('/cliente')
      .then((response) => {
        resolve(response.data)
      })
  })
}
