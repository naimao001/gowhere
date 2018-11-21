<template>
  <div class="container" @click="handleCloseClick">
    <div class="wrapper">
      <swiper :options="swiperOption">

        <swiper-slide v-for="(item, index) in list" :key="index">
          <img class="swiper-slide-img" :src="item" alt="">
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>


<script>
  export default {
    data(){
      return {
        swiperOption:{
          pagination:'.swiper-pagination',
          paginationType:'fraction',
          //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
           observer: true,
           observeParents: true
        }
      }
    },
    props:{
       list:Array
      },
      methods:{
        handleCloseClick(){
          this.$emit('closeGallary')
        }
      }
  }
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container {
  overflow: inherit;
}

.container {
  position: absolute;
  zindex: 998;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .wrapper {
    color: #fff;
    height: 0;
    width: 100%;
    padding-bottom: 100%;

    img {
      width: 100%;
    }
  }

  .swiper-pagination {
    bottom: -30px;
  }
}
</style>
