<template>
  <!-- home 一级路由组件 -->
  <div class="page-home">
    <router-view></router-view>
    <!-- <ul>
      <li>电影</li>
      <li>影院</li>
      <li>分类</li>
      <li>我的</li>
    </ul> -->
    <Tabbar :tabs="tabs" />
  </div>
</template>
<script>
import Tabbar from '../../components/Tabbar/index.vue'
// @import  '@/components/Tabbar/index.vue';
export default {
  name: 'Home',
  components: {
    Tabbar
  },
  data () {
    return {
      tabs: [
        { id: 1, name: '影片', icon: 'icon-dianying', href: '/films' },
        { id: 2, name: '影院', icon: 'icon-yingyuana', href: '/cinemas' },
        { id: 3, name: '分类', icon: 'icon-youhui', href: '/brand' },
        { id: 4, name: '我的', icon: 'icon-wode', href: '/center' }
      ]
    }
  }
}
</script>

<style lang="scss">
  /* 想让所有页面都生效的样式，可以在main.js或者App.vue里面引入 */
  /* body {
    background: green;
  } */
  .page-home {
    height: 100%;
    flex-direction: column;
    display: flex;
    > div:first-child {
      flex: 1;
    }
  }
</style>
