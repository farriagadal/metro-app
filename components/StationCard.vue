<template>
  <div class="card">
    <h3>Estación</h3>
    <p>{{ item['NOMBRE FANTASIA'] }}</p>
    <p class="label">Dirección</p>
    <p>{{ item['DIRECCION'] }}</p>
    <p class="label">Comuna</p>
    <p>{{ item['COMUNA'] }}</p>
    <p class="label">Código de linea</p>
    <p>{{ item['CODIGO'] }}</p>
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
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  box-shadow: 0px 4px 30px rgba(32, 32, 32, 0.07);
  display: grid;
  grid-template-columns: 130px 1fr;
  align-items: center;
  padding: 20px;
  border-radius: 8px;

  h3 {
    margin: 0;
  }

  // h3, .label {
  //   width: 30%;
  // }

  p {
    margin: 0;
  }
}
</style>
