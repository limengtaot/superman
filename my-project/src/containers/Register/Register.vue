<template>
    <div class="register">
        <mt-header title="多个按钮">
            <router-link to="/list" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
      <RegisterContent></RegisterContent>
    </div>
</template>

<script>
import { Header } from 'mint-ui'
import RegisterContent from './RegisterContent'

export default {
  name: 'Register',
  components:{Header,RegisterContent}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
</style>
