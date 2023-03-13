<template>
  <div>
    <Navbar />
    <div class="container">
      <!-- <FiltersBar />
      <ChangeView /> -->
      <Pagination
        :total-pages="parseInt(Math.ceil(totalItems / itemsPerPage))"
        @page-changed="pageChanged"
      />
      <List :items="items" />
    </div>
  </div>
</template>

<script>
import { getMetroLines } from '@/services/metro.service.js'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'IndexPage',
  components: {
    Pagination
  },
  data () {
    return {
      count: 0,
      items: [],
      itemsPerPage: 20,
      totalItems: 1
    }
  },
  mounted () {
    console.log('items', this.items)
    try {
      getMetroLines({}).then(({ list, total }) => {
        // // console.log('response', response.result.records)
        // console.log('items', this.items)
        this.items = list
        this.totalItems = total
        console.log('items', this.items)
      }).catch((error) => {
        console.log('error', error)
      })
    } catch (error) {
      console.log('error', error)
    }
  },
  methods: {
    pageChanged (pageNum) {
      console.log('pageChanged', pageNum)
    }
  }
}
</script>
