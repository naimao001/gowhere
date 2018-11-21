<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner 
      :sightName='sightName'
      :bannerImg='bannerImg'
      :gallaryImgs='gallaryImgs'
    ></detail-banner>
    <div class="content">
      <detail-list :list='categoryList'></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name:"Detail",
  data(){
    return {
      categoryList: [],
      sightName:"",
      bannerImg: "",
      gallaryImgs:[]
    }
  },
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods:{
    getDetailData(){
      // axios.get(`/api/detail.json?id=${this.$route.params.id}`).then(this.getDetailDataSucc)
      axios.get('/api/detail.json',{
        params:{
          id:this.$route.params.id
        }
      }).then(this.getDetailDataSucc)
    },
    getDetailDataSucc(res){
      res = res.data
      if (res.ret && res.data){
        const data = res.data
        this.categoryList = data.categoryList
        this.sightName  = data.sightName
        this.bannerImg  = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
      }
    }
  },
  mounted() {
    this.getDetailData()
  },
}
</script>

<style lang="stylus" scoped>
.content {
  height: 2000px;
}
</style>
