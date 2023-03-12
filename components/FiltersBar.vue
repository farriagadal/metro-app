<template>
  <div>
    <label for="filtro">Filtrar por:</label>
    <select id="filtro" v-model="filtro" @change="cambiarFiltro">
      <option value="tipo1">
        Tipo 1
      </option>
      <option value="tipo2">
        Tipo 2
      </option>
      <option value="tipo3">
        Tipo 3
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filtro: 'tipo1'
    }
  },
  methods: {
    cambiarFiltro () {
      this.$emit('filtro-cambiado', this.filtro)
    }
  }
}
</script>
