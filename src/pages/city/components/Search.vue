<template>
  <div class="searchBox">
    <input type="search" class="search" placeholder="请输入城市">
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.searchBox {
  height: 36px;
  padding: 5px;
  background-color: $bgColor;

  .search {
    width: 100%;
    height: 31px;
    text-align: center;
    border-radius: 3px;
    color: #666;
    padding: 0 2px;
  }
}
</style>
