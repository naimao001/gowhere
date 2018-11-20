<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities='cities' :hotCities='hotCities' :letter='letter'></city-list>
    <city-alphabet :cities='cities' @change='handleLetter'></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'

export default {
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data(){
    return {
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  methods:{
    //获取城市数据
    getCityData(){
      axios.get('/api/city.json').then(this.cityDataSucc)
    },
    //处理数据
    cityDataSucc(res){
      res = res.data
      if (res.ret && res.data){
        const data = res.data
        console.log(data)
        this.cities=data.cities
        this.hotCities=data.hotCities
      }
    },
    //监测到change后接受字母组件传来的字母 再传递给列表组件
    handleLetter(letter){
      this.letter = letter
    }
  },
  mounted() {
   this.getCityData()
  }
}
</script>

<style lang="stylus" scoped>
</style>
