<template>
<div class="list-content">
    <div class="content-glist">
        <ul class="glist-list">
            <li @click="toDetail(film.goods_id)" class="list-item" v-for="film in films" :key="film.goods_id">
                <div class="list-img">
                    <img :src="film.hd_thumb_url">
                </div>
                <div class="list-txt">
                    <span class="list-name">{{film.goods_name}}</span>
                    <span class="list-price">￥<span>{{film.normal_price}}</span></span>
                    <span class="list-mprice">￥<span>{{film.market_price}}</span></span>
                </div>
            </li>
        </ul>
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
            films:[],
            type:'subject/999/sorted_goods'
        }
    },
    methods:{
        getFilms(){
            let that = this;
            axios.get("/pdd/"+that.type+"?sort_type=PRIORITY&page=1&size=50",{

            }).then((res)=>{
                that.films = res.data.goods_list
                console.log(that.films,that.type,1235)
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
    .glist-list{
        position: relative;
        width: 100%;
        padding: .03rem .045rem .17rem;
        text-align: left;
        background-color: #f3f3f3;
        .list-item{
            display: inline-block;
            width: 1.74rem;
            height: 2.45rem;
            margin: .09rem .045rem 0;
            float: left;
            background-color: #fff;
            .list-img{
                position: relative;
                width: 1.46rem;
                height: 1.46rem;
                margin: .14rem .14rem .11rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .list-txt{
                position: relative;
                width: 90%;
                max-width: 248px;
                margin: 0 auto;
                text-align: center;
                .list-name{
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
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                }
                .list-price{
                    font-size: .12rem;
                    line-height: .26rem;
                    color: #ff2741;
                }
                .list-mprice{
                    font-size: .09rem;
                    text-decoration: line-through;
                    color: #868686;
                }
            }
        }
    }
}
</style>
