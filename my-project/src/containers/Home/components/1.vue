<template>
  <div class="cat" id="app-bann">
      <div class="cat-head">
          <p>精彩活动</p>
          <p class="see-more-content">查看更多</p>
      </div>
  </div>
</template>

<script>



export default {
  name: 'AppBann'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.cat{
    position: relative;
    .cat-head{
        position: relative;
        height: .53rem;
        background-color: #fff;
        p{
            display: inline-block;
            float: left;
            height: .53rem;
            margin-left: .1rem;
            font-size: .15rem;
            line-height: .53rem;
            color: #363636;
        }
        .see-more-content{
            position: relative;
            float: right;
            margin-right: .2rem;
            font-size: .12rem;
            line-height: .54rem;
            color: #868686;
        }
        .see-more-content:after {
                content: ">";
                position: absolute;
                top: 0;
                right: -.08rem;
                font-size: .14rem;
            }
    }
}
</style>
