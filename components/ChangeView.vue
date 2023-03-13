<template>
  <div class="wrapper">
    <button class="toggle-btn" @click="toggle">
      <img src="@/assets/images/views-icon.svg">
    </button>
    <div v-if="show" class="dropdown">
      <button
        v-for="view in views"
        :key="view.name"
        @click="$emit('change', view)"
      >
        {{ view.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangeView',
  data () {
    return {
      show: false,
      views: [{
        name: '10 por página',
        value: 10
      }, {
        name: '20 por página',
        value: 20
      }, {
        name: '50 por página',
        value: 50
      }, {
        name: 'Todas',
        value: 0
      }]
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  .toggle-btn {
    margin: 0;
    background-color: #fff;
    box-shadow: 0px 4px 30px rgba(32, 32, 32, 0.07);
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    &:hover {
      background: #ddd;
    }
  }

  .dropdown {
    display: grid;
    position: absolute;
    background: #fff;
    box-shadow: 0px 4px 30px rgba(32, 32, 32, 0.07);
    width: max-content;
    right: 0;
    margin-top: 5px;
    border-radius: 8px;
    overflow: hidden;
    button {
      background: none;
      border: none;
      padding: 6px 13px;
      text-align: left;
      &:hover {
        filter: brightness(0.9);
        background: #ddd;
      }
    }
  }
}
</style>
