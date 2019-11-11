<template>
  <ul class="mz-tabbar">
    <li v-for="tab in tabs" :key="tab.id">
      <router-link :to="tab.href">
        <i class="iconfont" :class="[tab.icon]"></i>
        <span>{{ tab.name }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tabbar',
  props: {
    tabs: Array
  }
}
</script>

<style lang="scss">
  // css中使用@别名，需要在前面加上一个 ~ 号
@import  '~@/assets/styles/common/mixin.scss';

.mz-tabbar {
  // position: relative;
  @include border-top;
  display: flex;
  height: 50px;
  box-sizing: border-box;
  // 实现边框线
  // &::before {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   content: '';
  //   height: 1px;
  //   background: #ededed;
  //   transform: scaleY(0.5);
  // }
  li {
    flex: 1;
  }
  a {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #797d82;
    &.router-link-active {
      color: #ff5f16;
    }
  }
  .iconfont {
    font-size: 26px;
  }
}
</style>
