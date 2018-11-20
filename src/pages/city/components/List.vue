<template>
  <div class="list" ref="wrapper">
    <div class="scroll-content">
      <div class="area">
        <div class="area-title border-topbottom">当前城市</div>
        <div class="button-list">
          <div id="current-city" class="button-content ">{{currentCity}}</div>
        </div>
      </div>
      <div class="area">
        <div class="area-title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-content" @click='handleCurrentClick' v-for="(item) in hotCities" :key="item.id">{{item.name}}</div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref='key'>
        <div class="area-title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item-content border-bottom" @click='handleCurrentClick' v-for="(innerItem) in item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations} from 'vuex'
import BScroll from 'better-scroll'
  export default {
    data(){
      return {}
    },
    methods:{
      handleCurrentClick(e){
        // this.$store.commit('changeCity',e.target.innerText)
        this.changeCity(e.target.innerText)
        this.$router.push('/')
      },
       ...mapMutations(['changeCity'])
    },
    computed:{
      //也可以是对象的写法 name页面中使用时将是用currentCity
      ...mapState({
        currentCity:'city'
      })
    },
    props:{
      hotCities:Array,
      cities:Object,
      letter:String
    },
    mounted() {
       this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch:{
      letter(){
        if(this.letter){
          //refs拿到的是数组 滚动的那个方法要传的是原生dom 所以加[0]
          const ele = this.$refs[this.letter][0]
          
          this.scroll.scrollToElement(ele)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 89px;
  left: 0;
  right: 0;
  bottom: 0;

  .area {
    .area-title {
      background-color: #eee;
      padding-left: 10px;
      line-height: 20px;
    }

    .button-list {
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;

      .button-content {
        width: 25%;
        height: 20px;
        margin: 10px;
        text-align: center;
        line-height: 20px;
        background-color: #fff;
        border: 1px solid #ccc;
        font-size: 14px;
        border-radius: 3px;
      }
    }

    #current-city {
      border: 1px solid #00bcd4;
    }

    .item-list {
      .item-content {
        padding-left: 10px;
        width: 100%;
        line-height: 36px;
      }
    }
  }
}
</style>
