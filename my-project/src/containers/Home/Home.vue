<template>
  <div class="Home" id="Home">
      <AppHeader></AppHeader>
      <MpddCat></MpddCat>
      <Home-cat1></Home-cat1>
  </div>
</template>

<script>

import AppHeader from '../.././components/AppHeader'
import MpddCat from './components/HomeCat'
import HomeCat1 from './components/HomeCat1'

export default {
  name: 'Home',
  components:{AppHeader,MpddCat,HomeCat1}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.Home{
  visibility: visible;
}
</style>
