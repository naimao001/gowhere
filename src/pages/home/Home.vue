<template>
  <div>
    <home-header></home-header>
    <swiper></swiper>
    <icons></icons>
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
export default {
  name:'Home',
  components:{
    HomeHeader,
    Swiper,
    Icons,
    Recommend,
    Weekend
  }
}
</script>

<style>
</style>
