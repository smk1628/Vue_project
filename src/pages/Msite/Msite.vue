<template>
  <div>
    <!-- 头部 -->
    <div class="mstie-header">
      <Header  title="首页">
      </Header>
      <!-- 搜索框 -->
      <div class="msite-search">
        <span :class="isSearch? 'icon_active':'icon_leave'" class="iconfont icon-sousuo"></span>
        <input @focus="isSearch = true" @blur="isSearch = false" type="input">
      </div>
    </div>
    <div class="msite-body">
      <Scroll>
        <!-- 轮播图 -->
        <div class="msite-show">
          <div ref="scl1" class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <!-- 商品列表 -->
        <div class="miste-recommend">
          <span class="recommend-title">精选好物</span>
          <div class="recommend-goods">
            <span class="goods-item"></span>
            <span class="goods-item"></span>
            <span class="goods-item"></span>
            <span class="goods-item"></span>
            <span class="goods-item"></span>
            <span class="goods-item"></span>
            <span class="goods-item"></span>
            <span class="goods-item"></span>
          </div>
        </div>
      </Scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import Scroll from '../../components/scroll/scroll.vue'
  export default {
    name:'msite',
    data(){
      return {
        isSearch:false
      }
    },
    methods:{
      // onFocus(){
      //   this.isSearch = true
      // },
      // onBlur(){
      //   this.isSearch = false
      // }
    },
    mounted(){
      new Swiper(this.$refs.scl1,{
        loop:true,
        pagination:{
          el: '.swiper-pagination',
          bulletClass:'my-bullet',
          bulletActiveClass: 'my-bullet-active',
        }
      })
    },
    components:{
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.icon_active{
  transition color .2s
  color #333 !important
}
.icon_leave{
  transition color .2s
  color #888 !important
}
.mstie-header{
  position fixed
  top 0
  left 0
  z-index 99
  background #fff
  width 100vw
  box-sizing border-box
  padding 0 18px 8px 18px
  .msite-search{
    position relative
    box-sizing border-box
    height 40px
    margin-top 2px
    span{
      position absolute
      top: 8px
      left 16px
      font-size 22px
      font-weight bolder
    }
    input{
      width 100%
      height 40px
      outline none
      border none
      border-radius 50px
      background #eee
      text-indent 44px
    }
  }
}
.msite-body{
  position: relative;
  margin-bottom 50px
  margin-top 138px
  .msite-show{
    box-sizing border-box
    padding 18px 0
    background #fff
  }
  .swiper-container{
    box-sizing border-box
    height 180px
    border-radius 16px
    background: #fff;
    box-shadow 0 0 4px rgba(0,0,0,.2)
    .swiper-wrapper{
      width 100%
      height 100%
      .swiper-slide{
        box-sizing border-box
        padding 10px
      }
    }
  }
  .miste-recommend{
    background #fff
    .recommend-title{
      font-size 20px
      font-weight bold
      &:after{
        content ''
        display block
        width 100px
        border 2px solid red
        background red
        border-radius 4px
      }
    }
    .recommend-goods{
      box-sizing border-box
      width 100%
      margin 16px auto
      display flex
      justify-content space-between
      flex-wrap: wrap;
      .goods-item{
        width 48%
        height 200px
        margin-bottom 12px
        background: #fff;
        border-radius 10px
        box-shadow 0 0 6px rgba(0,0,0,.2)
      }
    }
  }
}



</style>
<style>
.my-bullet{
    display: inline-block;
    width: 10px;
    height: 3px;
    background: #eee;
    position: relative;
    margin: 0 2px;
  }
  .my-bullet-active{
    background:aqua;
    opacity: 1;
  }
</style>
