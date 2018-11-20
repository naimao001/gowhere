<template>
  <div class="header">
    <div class="header-left"><i class="iconfont">&#xe624;</i></div>
    <div class="header-mid">
      <i class="iconfont search-icon">&#xe632;</i>
      <input type="search" class="search" placeholder="输入城市/景点/游玩主题">
    </div>
    <router-link to="/city" tag="div">
      <div class="header-right">{{city}}<i class="iconfont arrow-down">&#xeb6d;</i></div>
    </router-link>
  </div>
</template>

<script>
//引入mapState 为了简化代码 在计算属性中展开mapState即可
import { mapState } from 'vuex'
export default {
  name:'HomeHeader',
  computed:{
    ...mapState(['city'])
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
  span {
    z-index :998;
  }
  .header-right {
    min-width: 1.04rem;

    .arrow-down {
      font-size: 14px;
    }
  }
}
</style>
