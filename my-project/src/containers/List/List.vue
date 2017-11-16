<template>
  <div class="List" id="List">
      <AppHeader></AppHeader>
      <ListNav></ListNav>
      <ListContent></ListContent>
  </div>
</template>

<script>

import AppHeader from '../.././components/AppHeader'
import ListNav from './ListNav'
import ListContent from './ListContent'

export default {
  name: 'List',
  components:{AppHeader,ListNav,ListContent}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
</style>
