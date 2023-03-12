import FormData from 'form-data'
// import FormData from 'form-data'
import api from '@/services/api'

export const getMetroLines = () => {
  return new Promise((resolve, reject) => {
    const data = new FormData()
    data.append('resource_id', '3d54e961-d81b-4507-aeee-7a433e00a9bf')
    api.post('https://datos.gob.cl/api/3/action/datastore_search', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
        // more headers here
      }
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
