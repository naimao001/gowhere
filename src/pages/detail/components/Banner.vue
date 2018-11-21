<template>
  <div>
    <div class="banner">
      <div class="banner-img"><img src="//img1.qunarzz.com/sight/p0/1412/b5/c99be07b7b79cfb5900e03a35bc3051f.water.jpg_600x330_e1187eb8.jpg" alt=""></div>
      <div class="banner-info">
        <p class="banner-title">深圳欢乐谷AAAAA景区</p>
        <div @click='handlePicIconClick' class="banner-icon"><span class=" iconfont">&#xe694; </span> <span class="pic-num">50</span></div>
      </div>
    </div>
    <gallary @closeGallary='handleGallaryClose' :list='gallaryImgs' v-show='gallaryShow'></gallary>
  </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
  export default{
    data(){
      return{ 
        gallaryShow:false,
        }
    },
    props:{
      sightName:String,
      bannerImg:String,
      gallaryImgs:Array
    },
    components:{
      Gallary
    },
   methods:{
      handlePicIconClick(){
      this.gallaryShow = true
    },
    handleGallaryClose(){
      this.gallaryShow = false
    }
   }
  }
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    img {
      width: 100%;
    }
  }

  .banner-info {
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    color: #fff;
    padding: 0 10px;
    justify-content: space-between;
    box-sizing: border-box;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      font-size: 18px;
      line-height: 36px;
    }

    .banner-icon {
      background: rgba(0, 0, 0, 0.5);
      height: 20px;
      margin-top: 5px;
      padding: 3px;
      border-radius: 3px;
    }
  }
}
</style>
