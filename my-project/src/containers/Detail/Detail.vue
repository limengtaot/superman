<template>
  <div class="Detail">
      <AppHeader></AppHeader>
      <DetailContent></DetailContent>
  </div>
</template>

<script>

import AppHeader from '../.././components/AppHeader'
import DetailContent from './DetailContent'

export default {
  name: 'Detail',
  components:{AppHeader,DetailContent}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">

.Detail{
    box-sizing:none;
}
</style>
