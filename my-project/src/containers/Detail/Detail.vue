<template>
  <div class="Detail">
      <Home-header></Home-header>
      <Content></Content>
  </div>
</template>

<script>

import HomeHeader from '../.././components/HomeHeader'
import Content from './Content'

export default {
  name: 'Detail',
  components:{HomeHeader,Content}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">

.Detail{
    box-sizing:none;
}
</style>
