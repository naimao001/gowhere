<template>
  <div class="weekend">
    <h4 class="title">周末去哪儿</h4>
    <div class="content border-bottom" v-for="item in recommendList" :key="item.id">
      <div class="left-img">
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="right-content">
        <p class="content-title">{{item.title}}</p>
        <p class="content-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        recommendList:[
          { 
            id: 1,
            imgUrl: "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
            title: "故宫",
            desc: "东方宫殿建筑代表，世界宫殿建筑典范"
          },
           { 
            id: 2,
            imgUrl: "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
            title: "故宫",
            desc: "东方宫殿建筑代表，世界宫殿建筑典范"
          },
          { 
            id: 3,
            imgUrl: "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
            title: "故宫",
            desc: "东方宫殿建筑代表，世界宫殿建筑典范"
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.weekend {
  margin-top: 10px;

  .title {
    line-height: 30px;
    text-indent: 1em;
    font-size: 16px;
    background-color: #eee;
    font-weight: 700;
  }

  .content {
    padding: 10px;

    .left-img {
      
      margin-right: 10px;

      img {
        width: 100%;
      }
    }

    .right-content {

      .content-title {
        ellipsis();
        line-height: 22px;
        font-size: 16px;
        font-weight: 700;
      }

      .content-desc {
        color: #666;
        font-size: 14px;
        line-height: 22px;
        ellipsis();
      }

      .detail-button {
        line-height: 22px;
        margin-top: 8px;
        background: #ff9300;
        padding: 0 10px;
        border-radius: 5px;
        color: #fff;
      }
    }
  }
}
</style>

