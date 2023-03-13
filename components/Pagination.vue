<template>
  <div class="pagination-component">
    <paginate
      :page-count="totalPages"
      :click-handler="clickCallback"
      :prev-text="'<'"
      :next-text="'>'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    clickCallback (pageNum) {
      this.$emit('page-changed', pageNum)
    }
  }
}
</script>

<style lang="scss">
.pagination-component {
  .pagination {
    list-style-type: none;
    display: flex;
    margin: 0;
    margin-bottom: -2px;
  }
  ul {
    padding-left: 0;
  }
  li {
    margin: 0 4px;
    background-color: #fff;
    box-shadow: 0px 4px 30px rgba(32, 32, 32, 0.07);
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-weight: 600;

    &.disabled {
      opacity: 0.5;
    }

    &.page-item.disabled {
      opacity: 1;
      background: none;
      box-shadow: none;
    }

    &.page-item.active {
      border: #3168ba solid 1px;
    }
  }

  // .page-item {
  //   margin-right: 8px;
  // }
}
</style>
