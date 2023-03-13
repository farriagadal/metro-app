<template>
  <div class="card" @click="showModal = true">
    <h3>Estación "{{ item['NOMBRE FANTASIA'] }}""</h3>
    <div class="grid">
      <p class="label">
        Dirección
      </p>
      <p>{{ item['DIRECCION'] }}</p>
      <p class="label">
        Comuna
      </p>
      <p>{{ item['COMUNA'] }}</p>
      <p class="label">
        Código de linea
      </p>
      <p>{{ item['CODIGO'] }}</p>
    </div>
    <StationModal v-if="showModal" :item="item" @close=" showModal = false" />
  </div>
</template>

<script>
export default {
  name: 'StationCard',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  box-shadow: 0px 4px 30px rgba(32, 32, 32, 0.07);
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  border: transparent solid 1px;
  transition: all 0.2s;

  &:hover {
    border-color: #3168ba;
  }

  .grid {
    display: grid;
    grid-template-columns: 130px 1fr;
    align-items: center;
  }

  h3 {
    margin: 0;
    font-size: 17px;
    margin-bottom: 12px;
  }

  p {
    margin: 0;
    font-size: 14px;
    line-height: 140%;

    &.label {
      font-weight: 600;
      opacity: 0.9;
    }
  }
}
</style>
