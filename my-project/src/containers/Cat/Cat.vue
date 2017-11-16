<template>
  <div class="Cat">
    <mt-header title="多个按钮">
      <router-link to="/list" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <CatContent></CatContent>
  </div>
</template>

<script>
import { Header } from 'mint-ui'
import axios from 'axios'
import bus from '../../bus'
import CatContent from './CatContent'
export default {
  name: 'Cat',
  components:{Header,CatContent}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">

.Detail{
    box-sizing:none;
}
</style>
