<template>
  <div class="wrapper">
    <div class="card" v-click-outside="$event => $emit('close')">
      <h3>Estación "{{ item['NOMBRE FANTASIA'] }}""</h3>
      <div class="grid">
        <p class="label">
          Horario
        </p>
        <p>{{ item['HORARIO REFERENCIAL'] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  name: 'StationModal',
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background: #343434c9;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  animation: 1s appear;

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 8px;
    width: 400px;
    height: auto;
    border-radius: 4px;
    box-shadow: 0px 4px 30px rgba(32, 32, 32, 0.07);
    padding: 20px;

    .grid {
      display: grid;
      grid-template-columns: 1fr;
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
}
</style>
