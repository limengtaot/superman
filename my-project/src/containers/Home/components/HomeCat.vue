<template>
    <div>
        <div class="mpdd-banner">
                <img src="../../../assets/banner.jpg" alt="">
        </div>
        <div class="cat" id="cat">
            <div class="cat-head">
                <p>精彩活动</p>
                <p @click="toList()" class="see-more-content">查看更多</p>
            </div>
            <div class="cat-content">
                <div class="cat-content-left">
                    <img src="../../../assets/1.png" alt="" />
                    <img class="mal-you" src="../../../assets/2.png" alt="" />
                </div>
                <div class="cat-content-right">
                    <img src="../../../assets/3.jpg" alt="" />
                    <img class="mal-sale" src="../../../assets/4.png" alt="" />
                    <img class="mal-itry" src="../../../assets/5.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>



export default {
  name: 'cat',
  methods:{
    toList(){
     this.$router.push('/list')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
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
    .cat-content{
        position: relative;
        overflow-x: hidden;
        width: 100%;
        background:#fff;
        font-size: 0;
        .cat-content-left{
            position: relative;
            display: inline-block;
            width: 50%;
            max-width: 1.87rem;
            padding-right: .01rem;
            img{
                position: relative;
                width: 100%;
                height: 1.81rem;
            }
            .mal-you{
                width: 1.87rem;
                height: .9rem;
                margin-top: .01rem;
            }
        }
        .cat-content-right{
            position: relative;
            display: inline-block;
            width: 50%;
            max-width: 1.87rem;
            img{
                position: relative;
                width: 100%;
                height: .9rem;
            }
            .mal-sale {
                height: .9rem;
                margin-top: .01rem;
            }
            .mal-itry {
                height: .9rem;
                margin-top: .01rem;
            }
        }
    }
}
</style>
