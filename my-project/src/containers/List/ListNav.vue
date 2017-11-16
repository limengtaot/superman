<template>
<div class="list-nav">
    <div class="list-nav-box">
        <div :class="{active:type=='subject/999/sorted_goods'}" @click="changeType('subject/999/sorted_goods')" class="nav">品牌清仓</div>
        <div :class="{active:type=='subject/996/sorted_goods'}" @click="changeType('subject/996/sorted_goods')" class="nav">限时秒杀</div>
        <div :class="{active:type=='operation/12/groups'}" @click="changeType('operation/12/groups')" class="nav">海淘专场</div>
        <div :class="{active:type=='subject/502/sorted_goods'}" @click="changeType('subject/502/sorted_goods')" class="nav">品质水果</div>
        <div :class="{active:type=='subject/922/sorted_goods'}" @click="changeType('subject/922/sorted_goods')" class="nav">9.9特卖</div>
    </div>
    <div class="list-subject">
      <div class="list-subject-img"><img src="../../assets/brand.jpg"></div>
      <div class="list-subject-text">
          <p class="text-title">品牌清仓</p>
          <p>精选品牌，超低折扣，低至一折起！拼多多提供全场包邮服务，正品保障，承诺假一赔十。</p>
      </div>
    </div>
</div>
  
</template>

<script>
import bus from '../../bus'

export default {
  name: 'ListNav',
   data(){
    return {
      type:'subject/999/sorted_goods'
    }
  },
  methods:{
    changeType(type){
      this.type = type
      bus.$emit('changeType',type)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">

.list-nav-box{
  border-bottom: solid #fe6e00 1px;
  height:.37rem;
  background:#ed435b;
  .nav{
    float: left;
    width: 20%;
    height: 100%;
    text-align: center;
    font-size: .13rem;
    line-height: .37rem;
    color: #fff;
    cursor: pointer;
    &.active{
      background-color: #d53758;
    }
  }
}
.list-subject{
  width:100%;
  position: relative;
  .list-subject-img{
    width:100%;
    position: relative;
    height: 1.4rem;
    img{
      width:100%;
      height:100%;
    }
  }
  .list-subject-text{
    position: relative;
    padding: .1rem .19rem 0;
    background-color:#fff;
    .text-title{
      position: relative;
      margin-top: 0;
      font-size: .15rem;
      line-height: .33rem;
      color: #111;
    }
    p{
      position: relative;
      padding-top: .05rem;
      padding-bottom: .05rem;
      font-size: .12rem;
      line-height: .22rem;
      color: #686868;
    }
  }
}
</style>
