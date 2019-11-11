<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(picture,index) in pictures " :key="index">
        <img :src="picture" alt="" />
      </div>
      <!-- <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div> -->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" v-if="pagination"></div>

    <!-- 如果需要导航按钮 -->
    <!-- <template>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </template> -->

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Banner',
  props: {
    // 轮播图的数据
    pictures: Array,
    pagination: {
      type: Boolean,
      default: true
    },
    navigation: Boolean
  },
  methods: {
    initSwiper () {
      new Swiper('.swiper-container', {
        pagination: this.pagination ? {
          el: '.swiper-pagination'
        }
          : {},

        navigation: this.navigation ? {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
          : {}
      })
    }
  },
  // mounted () {
  //   this.initSwiper()
  // }
  updated() {
    this.initSwiper()
  }
}
</script>

<style lang="scss">
.swiper-container {
  height: 210px;
  
  img {
    width: 100%;
  }
}
</style>
