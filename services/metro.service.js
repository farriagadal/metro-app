import FormData from 'form-data'
// import FormData from 'form-data'
import api from '@/services/api'

export const getMetroLines = ({ limit = 20, offset = 0 }) => {
  return new Promise((resolve, reject) => {
    const data = new FormData()
    data.append('resource_id', '3d54e961-d81b-4507-aeee-7a433e00a9bf')
    data.append('limit', limit)
    data.append('offset', offset)
    api.post('https://datos.gob.cl/api/3/action/datastore_search', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
        // more headers here
      }
    })
      .then((response) => {
        resolve({
          list: response.data.result.records,
          total: response.data.result.total
        })
      })
      .catch((error) => {
        reject(error)
      })
  })
}
