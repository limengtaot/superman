<template>
    <div class="cat-content" v-html="films">
        {{films}}
    </div>
</template>

<script>
import axios from 'axios'
import bus from '../../bus'

export default {
    name: 'CatContent',
    data(){
        return {
            films:[]
        }
    },//+this.$route.params.id
    methods:{
        getFilms(){
            let that = this;
            axios.get('/db/goods2.html?goods_id=93484155',{

            }).then((res)=>{
                that.films = res.data
            })
        },
        changeType(type){
            this.getFilms()
        }
    },
    created(){
        this.getFilms()
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
