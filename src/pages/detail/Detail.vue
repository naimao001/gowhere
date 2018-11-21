<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  data(){
    return {
     
    }
  },
  components:{
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
.content{
  height 2000px;
}
</style>
