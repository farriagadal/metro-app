import { setClient } from '@/services/api'

export default ({ $axios, store }) => {
  // $axios.setHeader('Authorization', `Bearer ${store.state.auth.userToken}`)
  // $axios.setHeader('Authorization', 'es')
  setClient($axios)
}
