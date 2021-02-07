<template>
  <div class="w">
    <router-view class="wrap"></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from '@components/FooterGuide/FooterGuide.vue'
  export default {
    components:{
      FooterGuide
    },
    methods:{
      
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.w{
  width 100vw
  height 100vh
}
  .wrap{
    box-sizing border-box
    padding 0 18px;
  }
</style>



