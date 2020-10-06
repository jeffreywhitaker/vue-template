<template>
  <nav class="nav">
    <router-link :to="'/'">Home</router-link>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  background: cyan;

  a {
    padding: 10px 5px;
    text-decoration: none;

    :hover {
      background: lightpink;
    }
  }
}
</style>