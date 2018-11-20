<template>
  <div class="searchBox">
    <input v-model='keyword' type="search" class="search" placeholder="请输入城市">
    <div class="searchList" ref='searchlist' v-show='keyword'>
      <ul>
        <li class="searchlistli border-bottom" v-for="(item, index) in list" :key="index">{{item}}</li>
        <li class="searchlistli border-bottom" v-show='hasData'>没有找到匹配的数据</li>
      </ul>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
    data(){
      return {
        keyword:'',
        list:[],
        timer:null,
      }
    },
    props:{
      cities:Object
    },
    computed:{
      hasData(){
        return !this.list.length
      }
    },
    mounted() {
      new BScroll(this.$refs.searchlist)
    },
    watch:{
      keyword(){
        //函数节流
        if(this.timer){
          clearTimeout(this.timer)
        }
        if (!this.keyword){
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let key in this.cities){
            this.cities[key].forEach((item) => {
              if(item.spell.includes(this.keyword) || item.name.includes(this.keyword)){
                result.push(item.name)
              }
            })
          }
          this.list = result
        },100)
      }
    }
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

  .searchList {
    position: absolute;
    overflow: hidden;
    z-index: 1;
    top: 89px;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #eee;

    .searchlistli {
      background-color: #fff;
      line-height: 36px;
      padding-left: 10px;
    }
  }
}
</style>
