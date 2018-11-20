<template>
  <ul class="alphabet-list">
    <li class="item" v-for="item in letters" :key="item" :ref='item' @click="handleClick" @touchstart='handleTouchStart' @touchmove='handleTouchMove' @touchend='handleTouchEnd'>{{item}}</li>
  </ul>
</template>

<script>
  export default {
    data(){
      return {
        touchStatus:false,
        startY:'',
        timer:null
      }
    },
    props:{
      cities:Object,
    },
    computed:{
      letters(){
      const letters = []
        for(let key in this.cities){
          letters.push(key)
        }
        return letters
      }
    },
    updated() {
      // A 字母距离 字母选择框下边框高度 
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods:{
      handleClick(e){
        this.$emit('change',e.target.innerText)
      },
      handleTouchStart(){
        this.touchStatus = true
      },
      handleTouchMove(e){
        
        if (this.timer){
          // 函数节流
          clearTimeout(this.timer)
        }
       this.timer = setTimeout(() => {
        //此处89 头部和选择框的高度
        let touchY = e.touches[0].clientY - 89
        //20 是单个字母的高度
        let index = Math.floor((touchY - this.startY) / 20)
        
        //向外触发事件 告诉是哪个字母
        if (index>=0 && index<this.letters.length){
          this.$emit('change',this.letters[index])
        }
       },16)
       
      },
      handleTouchEnd(){
        this.touchStatus=false
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
