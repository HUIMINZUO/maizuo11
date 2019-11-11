import request from '../../utils/request'

export default {
  namespaced: true,

  state: {
    // 影片的轮播图数据
    bannerList: []
  },

  getters: {
    bannerListImgs(state) {
      return state.bannerList.map(item => item.img)
    }
  },

  mutations: {
    setBannerList(state, payload) {
      state.bannerList = payload
    }
  },

  actions: {
    getBannerList(context) {
      request.get('/banner').then(data => {
        // console.log(data)
        // 数据请求成功之后，需要将后台返回的数据存放到 state中
        context.commit('setBannerList', data)
      })
    }
  }
}
