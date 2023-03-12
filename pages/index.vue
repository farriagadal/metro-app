<template>
  <div>
    <h1>Lista de items</h1>
    <FiltersBar />
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.CODIGO }}
      </li>
    </ul>
    <button @click="count++">
      Add 1
    </button>
    {{ count }}
  </div>
</template>

<script>
import { getMetroLines } from '@/services/metro.service.js'

export default {
  name: 'IndexPage',
  data () {
    return {
      count: 0,
      items: []
    }
  },
  mounted () {
    console.log('items', this.items)
    try {
      getMetroLines().then((response) => {
        // // console.log('response', response.result.records)
        // console.log('items', this.items)
        this.items = response.result.records
        console.log('items', this.items)
      }).catch((error) => {
        console.log('error', error)
      })
    } catch (error) {
      console.log('error', error)
    }
  }
}
</script>
