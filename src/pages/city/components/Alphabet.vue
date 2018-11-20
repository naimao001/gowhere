<template>
  <ul class="alphabet-list">
    <li class="item" v-for="(item, key) in cities" :key="key" @click="handleClick">{{key}}</li>
  </ul>
</template>

<script>
  export default {
    data(){
      return {}
    },
    props:{
      cities:Object
    },methods:{
      handleClick(e){
        this.$emit('change',e.target.innerText)
      }
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
    font-size: 16px;
    color: #00bcd4;
  }
}
</style>
