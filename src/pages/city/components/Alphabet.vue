<template>
  <ul class="alphabet-list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
  export default {
    data(){
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
.alphabet-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  top: 89px;
  right: 0;
  bottom: 0;

  .item {
    line-height: 20px;
    font-size 16px;
    color:#00bcd4;
  }
}
</style>
