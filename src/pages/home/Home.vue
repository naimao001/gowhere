<template>
  <div>
    <home-header></home-header>
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
import {mapState} from 'vuex';
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
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
      lastCity:''
    }
  },
  methods:{
    getIndexData(){
      axios.get('/api/index.json?city='+this.city)
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
  computed:{
    ...mapState(['city'])
  },
  mounted() {
    this.lastCity = this.city
    this.getIndexData()
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.getIndexData()
    }
  },
}
</script>

<style>
</style>
