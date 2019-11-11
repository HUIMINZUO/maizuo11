<template>
  <!-- 影片的列表页 -->
  <div class="page-home-films">
    <!-- <h1>影片列表页</h1> -->
    <!-- 实现一个轮播图的效果 -->
    <Banner :pictures="bannerListImgs" />
  </div>
</template>

<script>
import Banner from '../../components/Banner'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Films',

  components: {
    Banner
  },

  computed: {
    ...mapGetters('film',['bannerListImgs'])
  },

  methods: {
    ...mapActions('film',['getBannerList'])
  },

  created() {
    this.getBannerList()
  }
}
</script>

<style>
</style>
