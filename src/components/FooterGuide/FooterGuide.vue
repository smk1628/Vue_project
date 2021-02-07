<template>
  <div id="footer">
    <ul id="bottom-nav-bar">
      <li 
        :class="{ active: $route.path === '/msite' }" 
        @click="goto('/msite')"
      >
        <i class="iconfont icon-shouye"></i><span>Home</span>
      </li>
      <li
        :class="{ active: $route.path === '/find' }"
        @click="goto('/find')"
      >
        <i class="iconfont icon-find"></i><span>Find</span>
      </li>
      <li :class="{ active: $route.path === '/order' }" @click="goto('/order')">
        <i class="iconfont icon-order"></i><span>Order</span>
      </li>
      <li
        :class="{ active: $route.path === '/profile' }"
        @click="goto('/profile')"
      >
        <i class="iconfont icon-center"></i><span>Center</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "FooterGuide",
  methods: {
    goto(path) {
      if(this.$route.path === path) return //避免重复路由
      this.$router.replace(path);
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.1);
  background: #fff;
  #bottom-nav-bar {
    width: 100%;
    display: flex;

    li {
      display: flex;
      padding-top: 5px;
      width: 25%;
      flex-direction: column;
      align-items: center;
      transition: color 0.3s;
      color:$qing;
      &.active {
        color: $qianhuang;
      }

      i {
        font-size: 22px;
      }
    }
  }
}
</style>
