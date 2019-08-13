import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
// 导入样式
import '@/styles/index.less'
import axios from '@/api'
import myPlugin from '@/components/main.js'
Vue.use(myPlugin)
Vue.prototype.$http = axios
// import router from './router/index.js'
// @是一个路径的别名   是src路径   只有在vue-cli项目下有效
// index是目录的索引文件  默认使用的索引文件 index。js index.vue
// 产品级别提示   不开启  开发阶段 提示越详细越好  开发级别提示
Vue.config.productionTip = false

Vue.use(ElementUI)
// main.js 入口文件
// 职责1：引入需要依赖的模块（js，包，css，其他资源）
// 职责2：创建一个根vue实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
