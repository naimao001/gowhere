<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities='cities' :hotCities='hotCities'></city-list>
    <city-alphabet :cities='cities'></city-alphabet>
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
      hotCities:[]
    }
  },
  methods:{
    getCityData(){
      axios.get('/api/city.json').then(this.cityDataSucc)
    },
    cityDataSucc(res){
      res = res.data
      if (res.ret && res.data){
        const data = res.data
        console.log(data)
        this.cities=data.cities
        this.hotCities=data.hotCities
      }
    }
  },
  mounted() {
   this.getCityData()
  }
}
</script>

<style lang="stylus" scoped>
</style>
