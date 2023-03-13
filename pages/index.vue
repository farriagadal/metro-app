<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="bar">
        <FilterSelect
          name="Comunas"
          :options="['Todas', ...municipalities]"
          :selected="municipality"
          @change="municipalityChanged"
        />
        <FilterSelect
          name="Lineas"
          :options="['Todas', ...lines]"
          :selected="line"
          @change="lineChanged"
        />
        <Pagination
          class="pagination"
          :total-pages="parseInt(Math.ceil(totalItems / itemsPerPage))"
          @page-changed="pageChanged"
        />
        <ChangeView @change="viewChanged" />
      </div>
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
      items: [],
      itemsPerPage: 20,
      page: 1,
      totalItems: 1,
      municipality: 'Todas',
      line: 'Todas',
      municipalities: [],
      lines: []
    }
  },
  mounted () {
    this.getItems()
    this.getAllComunas()
  },
  methods: {
    pageChanged (pageNum) {
      this.page = pageNum
      this.getItems()
    },
    viewChanged (view) {
      this.itemsPerPage = view.value
      this.getItems()
    },
    municipalityChanged (value) {
      this.municipality = value
      this.getItems()
    },
    lineChanged (value) {
      this.municipality = value
      this.getItems()
    },
    getItems () {
      getMetroLines({
        limit: this.itemsPerPage === 0 ? null : this.itemsPerPage,
        offset: this.itemsPerPage === 0 ? null : this.itemsPerPage * (this.page - 1),
        municipality: this.municipality === 'Todas' ? null : this.municipality,
        line: this.line === 'Todas' ? null : this.line
      }).then(({ list, total }) => {
        this.items = list
        this.totalItems = total
        console.log('items', this.items)
      }).catch((error) => {
        console.log('error', error)
      })
    },
    getAllComunas () {
      getMetroLines({ limit: null, offset: null }).then(({ list }) => {
        const municipalitiesTemp = list.map(item => item.COMUNA)
        this.municipalities = new Set(municipalitiesTemp)
        const linesTemp = list.map(item => item.CODIGO)
        this.lines = new Set(linesTemp)
      }).catch((error) => {
        console.log('error', error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.bar {
  padding-top: 30px;
  display: flex;
  // justify-content: space-between;
  align-items: end;
  margin-bottom: 20px;
}

.pagination {
  margin-left: auto;
  margin-right: 16px;
}
</style>
