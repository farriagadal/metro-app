<template>
  <div class="list">
    <StationCard
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    />
    <p v-if="items.length === 0">
      No hay estaciones que coincidan con tu búsqueda
    </p>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding-bottom: 100px;

  p {}
}
</style>
