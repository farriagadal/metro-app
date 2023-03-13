import FormData from 'form-data'
// import FormData from 'form-data'
import api from '@/services/api'

export const getMetroLines = ({ limit = 20, offset = 0, municipality = null, line = null }) => {
  return new Promise((resolve, reject) => {
    const data = new FormData()
    data.append('resource_id', '3d54e961-d81b-4507-aeee-7a433e00a9bf')
    if (limit) { data.append('limit', limit) }
    if (offset) { data.append('offset', offset) }
    const filters = {}
    if (municipality) { filters.COMUNA = municipality }
    if (line) { filters.CODIGO = line }
    if (municipality || line) {
      data.append('filters', JSON.stringify(filters))
    }
    api.post('https://datos.gob.cl/api/3/action/datastore_search', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
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
