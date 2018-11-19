<template>
  <div class="header">
    <router-link to="/">
    <i class="iconfont back-icon">&#xe624;</i>
    </router-link>
    <h4>城市选择</h4>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  height: $headerHeight;
  line-height: $headerHeight;
  background-color: $bgColor;
  text-align: center;
  .back-icon{
    position absolute
    left 10px;
    top:0;
    color:#fff;
  }
  h4 {
    color: #fff;
    font-size: 18px;
  }
}
</style>

