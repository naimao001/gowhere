<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="(item) in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>

      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data(){
    return {
      swiperOption:{
        autoplay:false
      },
    }
  },
  props:{
    iconList:Array
  },
  computed:{
    pages(){
      //将这个图片数组拆分成 总数量/8 个 (二维数组)
      //声明这个数组
      const pages = []
      //遍历这个有所有图片的数组
      this.iconList.forEach((item,index) => {
        //page 就是 数组下标 index超过8 到9的时候 page就是1了 就说明要生成第二个数组了
        const page = Math.floor(index/8)
        //数组声明 一开始肯定是不存在这个内层数组的 所有要先声明
        if(!pages[page]){
          pages[page] = []
        }
        //然后将对应的项添加进对应的数组
        pages[page].push(item)
      });
      return pages;
    }
  }
}  
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl";
@import "~styles/mixins.styl";
.icons {
  .swiper-slide {
    display: flex;
    flex-wrap: wrap;
  }

  .icon {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:10px;
    .icon-img {
      width: 55px;
      height: 55px;

      img {
        width: 100%;
      }
    }

    .icon-desc {
      margin-top: 5px;
      color:$darkTextColor
    }
  }
}
</style>
