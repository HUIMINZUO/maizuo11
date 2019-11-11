// // 1.引入 axios node 中的 commonJS 规范方式
const axios = require('axios')
//
// axios.get('https://m.maizuo.com/gateway?type=2&city',{
//   headers: {
//     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15732878454926327491677"}',
//     'X-Host': 'mall.cfg.common-banner'
//   }
// })
// .then(response => {
//   console.log(response.data)
// })
//

const http = axios.create({
  // 传递一些默认的选项
  // 发送请求时，如果没有明确指定请求的域名地址信息，
  //那么会主动将地址拼接上这个 baseURL
  baseURL: 'https://m.maizuo.com',

  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15732878454926327491677"}',
    'X-Host': 'mall.cfg.common-banner'
  }
})

// 响应的拦截，当请求响应回到 .then 回调之前，会先执行下面这段带的回调函数
http.interceptors.response.use(function(response) {
  console.log('1')
  return response.data
})


http.get('/gateway?type=2&cityId=440300&k=5549230').then(response => {
  console.log('2')
  console.log(response)
})
