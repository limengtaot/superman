<template>
  <div class="List" id="List">
      <Home-header></Home-header>
      <ListNav></ListNav>
      <ListContent></ListContent>
  </div>
</template>

<script>

import HomeHeader from '../.././components/HomeHeader'
import ListNav from './ListNav'
import ListContent from './ListContent'

export default {
  name: 'List',
  components:{HomeHeader,ListNav,ListContent}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
</style>
