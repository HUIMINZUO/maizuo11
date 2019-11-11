// 基于 axios 做的一个封装,用来实现网络请求工具
// 1.引入 axios
import axios from 'axios'

// 2.创建一个 axios 实例对象
const request = axios.create({
  // 默认配置项
  baseURL: 'http://localhost:3000'
})

// 3.响应拦截
request.interceptors.response.use(response => {
  return response.data
})

// 4.将实例暴露出去
export default request