<template>
  <div class="yo-scroll" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
    <header class="pull-refresh">
        <slot name="pull-refresh">
          <span v-if="isLoading">正在更新</span>
           <span v-else-if="top>70">松手更新</span>
           <span v-else-if="top>20">下拉刷新</span>
        </slot>
    </header>
    <div ref="scroll" class="inner" :class="transition? 'ai':''" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }">
      <slot></slot>
      <footer class="pull-update">
      <slot name="pull-update">
          <span v-if="isUpdating || top<-30">加载中...</span>
        </slot>
      </footer>
    </div>
    
  </div>
</template>

<script type="texv-ift/ecmascript-6">
  export default {
    name:'scroll',
    data(){
      return{
        top:0,
        startY:0,
        startX:0,
        scrollTop:0,
        transition:false,
        isVertical:false,
        isFirst:true,
        isLoading:false,
        isUpdating:false,
        isToPreventDefault:false
      }
    },
    methods:{
      touchStart(e){
        this.transition = false
        this.startY = e.targetTouches[0].pageY
        this.startX = e.targetTouches[0].pageX
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      },
      touchMove(e){
        let st = document.documentElement.scrollTop || document.body.scrollTop
        let ch = document.documentElement.clientHeight || document.body.clientHeight;
        let sh = document.documentElement.scrollHeight || document.body.scrollHeight;
        let moveY = e.targetTouches[0].pageY - this.startY
        let moveX = e.targetTouches[0].pageX - this.startX
        if(!this.isToPreventDefault && !this.isFirst) return
        else if(sh > ch && st+ch == sh) this.top  = moveY<-100? parseInt(-100*0.4):parseInt(moveY*0.4)
        else{
          if((moveY - st) > 0 ) this.isToPreventDefault=true
          if(this.isToPreventDefault && this.scrollTop == 0) e.preventDefault()
          if(Math.abs(moveY) > Math.abs(moveX) && this.isFirst) this.isVertical = true
          this.isFirst = false
          if(this.isVertical && this.scrollTop == 0) if(moveY >0) this.top  = moveY>200? parseInt(200*0.4):parseInt(moveY*0.4)
        }
      },
      touchEnd(e){
        this.transition=true
        this.isVertical=false
        this.isFirst = true
        this.isToPreventDefault = false
        if(this.top>70){
          this.isLoading = true
         setTimeout(()=>{
           this.top = 0
           this.isLoading = false
         },1000)
        }else if(this.top<-30){
          this.isUpdating = true
          setTimeout(()=>{
           this.top = 0
           this.isUpdating = false
         },1000)
        }else{
          this.top = 0
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.ai{
  transition transform .2s
}

.pull-refresh{
  position absolute
  left: 0;
  top:5px;
  height 20px
  width 339px
  display flex
  justify-content center
  align-items center
}
.pull-update{
 position absolute
 bottom: -20px;
 left: 50%;
 transform translateX(-50%)
}
.yo-scroll{
  position: relative;
  top: 0;
  left: 0;
  .inner{
    position relative;
  }                                   
}
</style>
