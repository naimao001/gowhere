<template>
  <div>
    <home-header></home-header>
    <swiper></swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import Swiper from './components/Swiper'
export default {
  name:'Home',
  components:{
    HomeHeader,
    Swiper
  }
}
</script>

<style>
</style>
