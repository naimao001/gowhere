<template>
  <div class="wallpaper">
    <swiper :options="swiperOption">
      
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-slide-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data(){
    return {
      swiperOption:{
        //显示分页的小点
        pagination: '.swiper-pagination',
        //自动播放
        autoplay: 2000,
        //循环播放
        loop: true
      },
    }
  },
  props:{
    swiperList:Array
  }
}
</script>

<style lang="stylus" scoped>
.wallpaper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}

.wallpaper {
  // 这5个是在网速慢的情况下 先占位
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;

  .swiper-slide-img {
    width: 100%;
  }
}
</style>
