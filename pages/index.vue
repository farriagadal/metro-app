<template>
  <div>
    <h1>Lista de items</h1>
    <FiltersBar />
    <!-- <ul>
      <li v-for="elemento in elementosFiltrados" :key="elemento.id">
        {{ elemento.nombre }}
      </li>
    </ul> -->
  </div>
</template>

<script>
// import { getMetroLines } from '@/services/metro.service.js'
import axios from 'axios'
// import FormData from 'form-data'
// const axios = () => import('axios')

export default {
  name: 'IndexPage',
  // components: {
  //   Filtros
  // },
  // async asyncData ({ $axios }) {
  //   let items = []
  //   try {
  //     // const data = new FormData()
  //     // data.append('resource_id', '3d54e961-d81b-4507-aeee-7a433e00a9bf')
  //     const response = await getMetroLines()
  //     console.log('response', response)
  //     items = response.data.result.records
  //   } catch (error) {
  //     console.log('error', error)
  //   }
  //   return {
  //     items
  //   }
  // },
  data () {
    return {
      filter: [],
      items: []
    }
  },
  // computed: {
  //   elementosFiltrados () {
  //     return this.items.filter(elemento => elemento.tipo === this.filtro)
  //   }
  // },
  mounted: () => {
    // this.$nuxt.$loading.start() // mostrar indicador de carga
    try {
      const data = new FormData()
      data.append('resource_id', '3d54e961-d81b-4507-aeee-7a433e00a9bf')
      // axios.post('https://datos.gob.cl/api/3/action/datastore_search', { resource_id: '3d54e961-d81b-4507-aeee-7a433e00a9bf' }).then((response) => {
      axios.post('https://datos.gob.cl/api/3/action/datastore_search', data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*'
        }
      }).then((response) => {
        console.log('response', response)
      }).catch((error) => {
        console.log('error', error)
      })
    } catch (error) {
      console.log('error', error)
    }
  }
  // methods: {
  //   changeFilter (newFilter) {
  //     this.filter = newFilter
  //     // this.$nuxt.$loading.start() // mostrar indicador de carga
  //     // getMetroLines()
  //     //   .then((response) => {
  //     //     this.items = response.data
  //     //     this.$nuxt.$loading.finish() // ocultar indicador de carga
  //     //   })
  //     //   .catch((error) => {
  //     //     console.error(error)
  //     //     this.$nuxt.$loading.finish() // ocultar indicador de carga
  //     //   })
  //   }
  // }
}
</script>
