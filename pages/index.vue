<template>
  <div>
    <Navbar />
    <div class="container">
      <h1>Lista de items</h1>
      <FiltersBar />
      <ChangeView />
      <List :items="items" />
    </div>
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
