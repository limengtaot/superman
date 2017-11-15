<template>
  <div class="cat" id="cat1" >
      <div class="cat-head act-head">
          <p>精选专题</p>
          <p @click="toList()" class="see-more-content">查看更多</p>
      </div>
      <ul class="mpdd-cat-list" ref="container" >
            <li class="mpdd-cat-item">
                <div class="pdd-index-glist" avalonctrl="cat-clothes">
                    <div class="glist-banner-wrapper">
                        <img alt="banner" src="//mcdn.pinduoduo.com/assets/img/cat_clothes.jpg">
                    </div>
                    <ul >
                        <li class="pi-glist-item" v-for="banner in banners" :key="banner.goods_id">
                            <img alt="goods" :src="banner.hd_thumb_url+'@750w_1l_50Q.src'">
                            <p class="index-goods-name">{{banner.goods_name}}</p>
                            <span class="index-goods-price">￥<span>{{banner.market_price}}</span></span>
                            <span class="index-goods-mprice">￥<span>{{banner.normal_price}}</span></span>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="mpdd-cat-item">
                <div class="pdd-index-glist" avalonctrl="cat-clothes">
                    <div class="glist-banner-wrapper">
                        <img alt="banner" src="//mcdn.pinduoduo.com/assets/img/cat_girlshoes.jpg">
                    </div>
                    <ul >
                        <li class="pi-glist-item" v-for="banner in banners1" :key="banner.goods_id">
                            <img alt="goods" :src="banner.hd_thumb_url+'@750w_1l_50Q.src'">
                            <p class="index-goods-name">{{banner.goods_name}}</p>
                            <span class="index-goods-price">￥<span>{{banner.market_price}}</span></span>
                            <span class="index-goods-mprice">￥<span>{{banner.normal_price}}</span></span>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="mpdd-cat-item">
                <div class="pdd-index-glist" avalonctrl="cat-clothes">
                    <div class="glist-banner-wrapper">
                        <img alt="banner" src="//mcdn.pinduoduo.com/assets/img/cat_boyshirt.jpg">
                    </div>
                    <ul >
                        <li class="pi-glist-item" v-for="banner in banners2" :key="banner.goods_id">
                            <img alt="goods" :src="banner.hd_thumb_url+'@750w_1l_50Q.src'">
                            <p class="index-goods-name">{{banner.goods_name}}</p>
                            <span class="index-goods-price">￥<span>{{banner.market_price}}</span></span>
                            <span class="index-goods-mprice">￥<span>{{banner.normal_price}}</span></span>
                        </li>
                    </ul>
                </div>
            </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'cat1',
  data () {
    return {
        banners:[],
        banners1:[],
        banners2:[],
    }
  },
  methods:{
    getBanners(){
      let that = this
      axios.get('/pdd/operation/14/groups',{
      }).then((res)=>{
        that.banners = res.data.goods_list.slice(0,3)
        that.banners1 = res.data.goods_list.slice(34,37)
        that.banners2 = res.data.goods_list.slice(20,23)
      })
      
      
    },
    toList(){
        this.$router.push('/list')
    }
  },
  created(){
    this.getBanners()
  }
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
    .act-head{
        background: #f3f3f3;
    }
    .mpdd-cat-list {
        position: relative;
        display: block;
        font-size: 0;
        .pdd-index-glist {
            position: relative;
            width: 100%;
            height: auto;
            background-color: #fff;
            border-top: .15rem solid #f3f3f3;
            .glist-banner-wrapper {
                position: relative;
                width: 100%;
                height: 1.87rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            ul{
                position: relative;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                display: -webkit-flex;
                width: 100%;
                padding: .08rem .05rem .17rem;
                font-size: 0;
                li{
                    position: relative;
                    display: inline-block;
                    width: 32%;
                    margin-right: 1.9%;
                    font-size: 0;
                    text-align: center;
                    img{
                        width: 1.17rem;
                        height: 1.17rem;
                    }
                    .index-goods-name {
                        overflow: hidden;
                        height: .3rem;
                        margin: .08rem 0;
                        font-size: .12rem;
                        line-height: .16rem;
                        color: #6c6c6c;
                    }
                    .index-goods-price {
                        font-size: .14rem;
                        line-height: 1;
                        color: #ff2741;
                    }
                    .index-goods-mprice {
                        font-size: .12rem;
                        text-decoration: line-through;
                        color: #cbcbcb;
                    }
                }
            }
        }
    }
}
</style>
