<template>
  <nav>
    <div class="container">
      <img src="~/assets/images/logo.svg" alt="logo">
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss">
nav {
  background-color: #fff;
  box-shadow: 0px 4px 30px rgba(32, 32, 32, 0.07);
  img {
    width: 140px;
  }
}
</style>
