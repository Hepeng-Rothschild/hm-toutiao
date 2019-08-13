// 对axios进行配置  然后将配置好的axios导出
import axios from 'axios'
import store from '@/store'

// 进行配置
// 基准路径
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 请求头字段
// axios.defaults.headers = {
//     Authorization:`Bearer ${store.getUser().token}`
// }

axios.interceptors.request.use((config) => {
  // 修改  在每次请求前  获取一次token设置头部
  // 好处就是不会覆盖之前的信息

  config.headers.Authorization = `Bearer ${store.getUser().token}`
  return config
}, (err) => {
  return Promise.reject(err)
})
axios.interceptors.response.use((res) => {
  return res
}, (err) => {
  // 获取响应代码
  // err错误对象
  // err.response  响应对象
  // err.response.status  响应状态码
  if (err.response.status === 401) {
    // token 失效 跳转登录界面
    // this.$router.push('/login')  本质  把hash改成了#/login
    location.hash = '#/login'
  }
  return Promise.reject(err)
})
export default axios
