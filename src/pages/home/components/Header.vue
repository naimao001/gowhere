<template>
  <div class="header">
    <div class="header-left"><i class="iconfont">&#xe624;</i></div>
    <div class="header-mid">
      <i class="iconfont search-icon">&#xe632;</i>
      <input type="search" class="search" placeholder="输入城市/景点/游玩主题">
    </div>
    <router-link to="/city" tag="span">
      <div class="header-right">{{this.city}}<i class="iconfont arrow-down">&#xeb6d;</i></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name:'HomeHeader',
  props:{
    city:String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  line-height: 0.86rem;
  display: flex;
  color: #fff;
  background-color: $bgColor;

  .header-left {
    width: 0.64rem;
    text-align: center;
  }

  .header-mid {
    flex: 1;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    position: relative;

    .search-icon {
      position: absolute;
      left: 0.1rem;
      color: #999;
    }

    .search {
      width: 100%;
      padding-left: 0.6rem;
      background-color: #fff;
      border-radius: 0.1rem;
      color: #ccc;
      line-height: 0.64rem;
    }
  }

  .header-right {
    min-width: 1.04rem;

    .arrow-down {
      font-size: 14px;
    }
  }
}
</style>
