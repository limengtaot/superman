<template>
    <div class="list-content">
        <div class="content-glist" v-for="film in 1" :key="films.goods_id"> 
            <div class="list-img">
                <img :src="films.hd_thumb_url">
            </div>
            <div class="list-txt">
                <h4 class="list-name">{{films.short_name}}</h4>
                <span class="list-price">￥<span>{{films.normal_price}}</span></span>
                <span class="list-mprice">￥<span>{{films.market_price}}</span></span>
                <span class="list-make">已有<span class="make">{{films.cnt}}</span>人预约</span>
                <span class="list-goods_name">{{films.goods_name}}</span>
            </div>
            <div id="whiteBarInfo" class="prod-whitebar whitebar-flick J_ping">
                <span class="part-note-msg">白条</span>
                <div class="prod-whitebar-txt">【白条支付】首单立减5元</div>
            </div>
            <div class="goods-part bdr-tb-bold mar-t">
                <div class="spec-desc">
                    <span class="part-note-msg">已选</span>
                    <div id="specDetailInfo" class="base-txt">&nbsp;&nbsp;<span class="amount">1件</span>
                    </div>
                    <em class="icon-popups"></em>
                </div>
                <div id="warranty-seled-list"></div>
            </div>
            <div class="Join-cat">
                <div class="nav"><p>加入购物车</p></div>
                 <div class="nav"><p>购物车</p></div>
                <div class="nav active"><p>立即购买</p></div>
            </div>
            <div>
                <ul class="xiuli">
                    <li><img :src="films.hd_thumb_url" alt=""></li>
                    <li><img :src="films.hd_thumb_url" alt=""></li>
                    <li><img :src="films.hd_thumb_url" alt=""></li>
                    <li><img :src="films.hd_thumb_url" alt=""></li>
                    <li><img :src="films.hd_thumb_url" alt=""></li>
                    <li><img :src="films.hd_thumb_url" alt=""></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import bus from '../../bus'

export default {
    name: 'ListContent',
    data(){
        return {
            films:[]
        }
    },
    methods:{
        getFilms(){
            let that = this;
            axios.get('/pdd/subject/999/sorted_goods?'+this.$route.params.id).then((res)=>{
                for(var i = 0; i < res.data.goods_list.length; i++){
                    if(that.$route.params.id == res.data.goods_list[i].goods_id){
                        that.films = res.data.goods_list[i];
                        console.log(that.films)
                    }
                }
                
            })
        },
        changeType(type){
            this.films=[]
            this.type=type
            this.getFilms()
        },
        toDetail(id){
        this.$router.push({name:'detail',params:{id}})
        }
    },
    created(){
        this.getFilms()
    },
    mounted(){
        let that = this;
        bus.$on("changeType",function (type) {
            this.changeType(type)
        }.bind(this))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.content-glist{
    position: relative;
    width:100%;
    .list-img{
        position: relative;
        width: 3.75rem;
        height: 3.75rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .list-txt{
        position: relative;
        width: 100%;
        span{
            margin-top:.2rem;
        }
        .list-name{
            padding-left:.1rem;
            margin-top:.2rem;
            font-size: 16px;
            text-align: left;
        }
        .list-price{
            padding-left:0.1rem;
            display: inline-block;
             margin-top:.2rem;
            font-size: .20rem;
            line-height: .26rem;
            color: #ff2741;
            font-weight:800;
        }
        .list-mprice{
            font-size: .09rem;
            text-decoration: line-through;
            color: #868686;
        }
        .list-make{
            display: block;
            padding-left: .1rem;
            .make{
                color:#ff2741;
            }
        }
        .list-goods_name{
            position: relative;
            display: -webkit-box;
            overflow: hidden;
            height: .4rem;
            width: 100%;
            margin-bottom: .04rem;
            font-size: .1rem;
            line-height: .14rem;
            text-align: left;
            text-overflow: ellipsis;
            word-wrap: break-word;
            word-break: break-all;
            color: #686868;
            padding-left:.1rem;
        }
    }
    .prod-whitebar {
        padding: .15rem 0;
        margin-top:.1rem;
        padding-left:.2rem;
        position: relative;
        background-color:#fff;
        .part-note-msg {
            display: inline-block;
            float: left;
            line-height: 15px;
            font-size: 13px;
            color: #81838e;
            width: .26rem;
            white-space: normal;
            height: auto;
        }
        .prod-whitebar-txt {
            margin-left: 34px;
            font-size: 13px;
            color: #252525;
            line-height: 15px;
            margin-right: 28px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
    .goods-part {
        padding: .1rem .2rem;
        margin-top:.1rem;
        background-color: #fff;
        .pro-color, .pro-count, .pro-size, .pro-spec, .spec-desc {
            font-size: 0;
            overflow: hidden;
            position: relative;
            .part-note-msg {
                line-height: 18px;
            }
        }
         .part-note-msg {
            display: inline-block;
            float: left;
            line-height: 15px;
            font-size: 13px;
            color: #81838e;
            width: .26rem;
            white-space: normal;
            height: auto;
        }
        .base-txt {
            margin-left: 34px;
            margin-right: 30px;
            font-size: 13px;
            color: #252525;
            line-height: 15px;
        }
    }
    .Join-cat{
        position: fixed;
        left: 0;
        bottom: 0;
        border-top: solid #666 1px;
        background:#fff;
        width:100%;
        height:.37rem;
        .nav{
            float: left;
            width: 33%;
            height: 100%;
            text-align: center;
            font-size: .13rem;
            line-height: .37rem;
            color: #fff;
            cursor: pointer;
            p{
                margin:0 .2rem;
                background-color:#666;
            }
            &.active{
                p{
                    background-color: #d53758;
                }
            }
        }
    }
    .xiuli{
        width:3.75rem;
        height: 3.75rem;
        img{
            width:100%;
            height:100%;
        }
    }
}
</style>
