<template>
  <div class="list" ref="wrapper">
    <div class="scroll-content">
      <div class="area">
        <div class="area-title border-topbottom">当前城市</div>
        <div class="button-list">
          <div id="current-city" class="button-content ">北京</div>
        </div>
      </div>
      <div class="area">
        <div class="area-title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-content">北京</div>
          <div class="button-content">北京</div>
          <div class="button-content">北京</div>
          <div class="button-content">北京</div>
        </div>
      </div>
      <div class="area">
        <div class="area-title border-topbottom">A</div>
        <div class="item-list">
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="area-title .border-topbottom">A</div>
        <div class="item-list">
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="area-title .border-topbottom">A</div>
        <div class="item-list">
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
          <div class="item-content border-bottom">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    data(){
      return {}
    },
    mounted() {
       this.scroll = new BScroll(this.$refs.wrapper)
    },
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
