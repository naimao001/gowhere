<template>
  <div class="weekend">
    <h4 class="title">周末去哪儿</h4>
    <div class="content border-bottom" v-for="item in weekendList" :key="item.id">
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
    props:{
      weekendList:Array
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

