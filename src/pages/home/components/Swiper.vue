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
      swiperList:[
        {id:1,imgUrl:"http://img1.qunarzz.com/piao/fusion/1811/68/c66e4cde1ee62602.jpg_750x200_e9b97acd.jpg"},
        {id:2,imgUrl:"http://img1.qunarzz.com/piao/fusion/1810/6e/4a5551bbb189d902.jpg_750x200_25257467.jpg"},
        {id:3,imgUrl:"http://img1.qunarzz.com/piao/fusion/1810/af/30ffcf34e9819f02.jpg_750x200_736b7236.jpg"},
        {id:4,imgUrl:"http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg"},
        {id:5,imgUrl:"http://img1.qunarzz.com/piao/fusion/1809/12/856f100069809e02.jpg_750x200_e3485a2b.jpg"}
      ]
    }
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
  padding-bottom: 27.25%;
  background: #eee;

  .swiper-slide-img {
    width: 100%;
  }
}
</style>
