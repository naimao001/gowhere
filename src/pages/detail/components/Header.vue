<template>
  <div class="container">
    <router-link class="circle-back iconfont" tag='div' to="/" v-show='circleShow'>
      &#xe624;
    </router-link>
    <div class="header" v-show='!circleShow' :style='opacityStyle'>
      <router-link to='/' tag='div' class="header-back iconfont">
        &#xe624;
      </router-link>
      <h4>景点详情</h4>
    </div>
  </div>
</template> 

<script>
  export default {
    data(){
      return {
        circleShow:true,
        opacityStyle:{
          opacity:0
        }
      }
    },
    methods:{
      handleScroll(){
        const top = document.documentElement.scrollTop
        if (top > 60){
          const opacity = top / 140
          this.opacityStyle= {
            opacity
          }
          this.circleShow = false
        } else {
           this.circleShow = true
        }
      }
    },
    mounted() {
      window.addEventListener('scroll',this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
.container {
  position: fixed;
  width: 100%;
  line-height: 43px;
  z-index: 1111;

  .circle-back {
    position: absolute;
    z-index: 3;
    left: 10px;
    top: 5px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    line-height: 36px;
    color: #fff;
    text-align: center;
  }

  .header {
    text-align: center;
    color: #fff;
    background-color: #00bcd4;

    .header-back {
      position: absolute;
      z-index: 3;
      left: 10px;
      top: 5px;
      line-height: 36px;
      color: #fff;
      text-align: center;
    }
  }
}
</style>
