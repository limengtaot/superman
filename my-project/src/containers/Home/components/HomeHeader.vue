<template>
  <div>
        <div class="header">
            <div class="mpdd-top-logo">
                <img src="../../../assets/mpdd_logo.png" />
            </div>
            <span>0.1元包邮抢16包清风面巾纸</span>
            <div class="mpdd-top-btn">前往购买</div>
        </div>
        <div class="mpdd-head-wrapper">
            <ul class="mph-tab">
                <li>
                    <span class="mph-tab-item red-color-font">首页</span>
                    <span class="mph-tab-item">商家入驻</span>
                    <span class="mph-tab-item">帮助中心</span>
                </li>
            </ul>
        </div>
        <div class="mpdd-banner">
            <img src="../../../assets/banner.jpg" alt="">
        </div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.header{
    height:0.45rem;
    background: url('../../../assets/mpdd_top_bg.png');
    .mpdd-top-logo{
        position: relative;
        display: inline-block;
        float: left;
        width: .9rem;
        height: .3rem;
        margin-left: .13rem;
        img{
            position: relative;
            width: 100%;
            height: 100%;
            margin-top: .075rem;
            vertical-align: middle;
        }
    }
    span{
        display: inline-block;
        height: .45rem;
        margin-left: .2rem;
        font-size: .12rem;
        line-height: .45rem;
        color: #fff;
    }
    .mpdd-top-btn{
        position: absolute;
        width: .74rem;
        height: .27rem;
        top: .09rem;
        right: .1rem;
        font-size: .14rem;
        line-height: .28rem;
        text-align: center;
        color: #ed2632;
        border-radius: .025rem;
        background-color: #fff;
    }
}
.mpdd-head-wrapper{
    position: relative;
    width:100%;
    height: 0.5rem;
    background: #f3f3f3;
    line-height:0.5rem;
    .mph-tab{
        position: relative;
        height: 100%;
        li{
            display: inline-block;
            position: relative;
            height: 100%;
            span{
                margin: 0 .1rem;
                font-size: .14rem;
                color: #6c6c6c;
            }
            .red-color-font {
                color: #ed435b;
            }
        }
    }
}
.mpdd-banner{
        position: relative;
        width: 100%;
        height: 1.55rem;
        background-color: #f3f3f3;
        img{
            width:100%;
            height:1.4rem;
        }
}

</style>
