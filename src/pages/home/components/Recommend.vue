<template>
  <div class="recommend">
    <h4 class="title">热销推荐</h4>
    <div class="content border-bottom" v-for="item in recommendList" :key="item.id">
      <div class="left-img">
        <img :src="item.imgUrl" alt="">
      </div>
      <router-link :to="'/detail/' + item.id" class="right-content" tag='div'>
      <p class="content-title">{{item.title}}</p>
        <p class="content-desc">{{item.desc}}</p>
        <button class="detail-button">查看详情</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        
      }
    },
    props:{
      recommendList:Array
    }
  }
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend {
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
    display: flex;

    .left-img {
      width: 70px;
      height: 70px;
      margin-right: 10px;

      img {
        width: 100%;
      }
    }

    .right-content {
      flex: 1;

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

