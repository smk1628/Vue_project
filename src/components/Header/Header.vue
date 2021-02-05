<template>
    <header class="header">
      <span class="title">{{title}}</span>
      <slot name="right"></slot>
    </header>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
        title:String
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.header{
  box-sizing:border-box;
  height:96px;
  padding:18px 0;
  .title{
    display block;
    font-size:34px;
    margin-left:8px;
    margin-top:24px;
    color:#333;
    font-weight:bold;
  }
}
</style>
