<template>
  <div class="Home" id="Home">
      <Home-header></Home-header>
      <Home-cat></Home-cat>
      <Home-cat1></Home-cat1>
  </div>
</template>

<script>

import HomeHeader from './components/HomeHeader'
import HomeCat from './components/HomeCat'
import HomeCat1 from './components/HomeCat1'

export default {
  name: 'Home',
  components:{HomeHeader,HomeCat,HomeCat1}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.Home{
  visibility: visible;
}
</style>
