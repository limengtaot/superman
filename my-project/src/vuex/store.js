import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state = {
    type:'subject/999/sorted_goods'
}

const mutations={
    one(state){
        console.log(1,state.type)
        state.type= 'subject/999/sorted_goods';
    },
    two(state){
        console.log(2,state.type)
        state.type= 'subject/996/sorted_goods';
    },
    three(state){
        console.log(3,state.type)
        state.type= 'operation/12/groups';
    },
    four(state){
        console.log(4,state.type)
        state.type= 'subject/502/sorted_goods';
    },
    five(state){
        console.log(5,state.type)
        state.type= 'subject/922/sorted_goods';
    }
}

const store = new Vuex.Store({
    state,mutations
})

export default store