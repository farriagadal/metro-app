import axios from 'axios'
// import api from './api'

export const getMetroLines = () => {
  return new Promise((resolve) => {
    const data = new FormData()
    data.append('resource_id', '3d54e961-d81b-4507-aeee-7a433e00a9bf')
    axios.post('https://datos.gob.cl/api/3/action/datastore_search', data)
      .then((response) => {
        resolve(response.data)
      })
  })
}
