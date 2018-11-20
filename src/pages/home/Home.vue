<template>
  <div>
    <home-header :city='city'></home-header>
    <swiper :swiperList='swiperList'></swiper>
    <icons :iconList='iconList'></icons>
    <recommend :recommendList='recommendList'></recommend>
    <weekend :weekendList='weekendList'></weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'

export default {
  name:'Home',
  components:{
    HomeHeader,
    Swiper,
    Icons,
    Recommend,
    Weekend
  },
  data(){
    return {
      city:'北京',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods:{
    getIndexData(){
      axios.get('/api/index.json')
        .then(this.indexDataSucc)
    },
    indexDataSucc(res){
      // console.log(res)
      res = res.data
      if (res.ret && res.data ){
        const data = res.data
        this.swiperList=data.swiperList
        this.iconList=data.iconList
        this.recommendList=data.recommendList
        this.weekendList=data.weekendList
      }
    }
  },
  mounted() {
    this.getIndexData()
  },
}
</script>

<style>
</style>
