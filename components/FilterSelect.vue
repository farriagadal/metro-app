<template>
  <div class="wrapper">
    <label>{{ name }}:</label>
    <button class="toggle-btn" :class="{ active: show }" @click="toggle">
      {{ selected }}
      <img src="@/assets/images/arrow-down.svg">
    </button>
    <div v-if="show" v-click-outside="$event => show = false" class="dropdown">
      <button
        v-for="(option, index) in options"
        :key="index"
        @click="$emit('change', option)"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  name: 'FilterSelect',
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    selected: {
      // type string & null
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      show: false
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
margin-right: 20px;
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
  justify-content: left;
  min-width: 200px;
  padding: 0 13px;
  &:hover {
    background: #ddd;
  }

  img {
    margin-left: auto;
  }

  &.active {
    img {
      transform: rotate(180deg);
    }
  }
}

.dropdown {
  display: grid;
  box-shadow: 0px 4px 30px rgba(32, 32, 32, 0.07);
  position: absolute;
  background: #fff;
  width: 100%;
  right: 0;
  margin-top: 5px;
  border-radius: 8px;
  overflow: hidden;
  z-index: 1;
  max-height: 300px;
  overflow-y: auto;
  button {
    background: none;
    border: none;
    padding: 6px 13px;
    text-align: left;
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
      background: #ddd;
    }
  }
}
}
</style>
