// 封装一个vue插件
// 作用 ，注册components下的所有组件为全局组件
import MyBread from '@/components/my-bread'
import MyTest from '@/components/my-test'
import MyChannel from '@/components/my-channel'
import MyImage from '@/components/my-image'

// vue 插件定义的规则  暴露一个对象{}  在对象中选项 install 对应的一个函数  函数形参vue对象
export default {
  install (Vue) {
    // vue.use(要使用插件)  Vue就是你use前的vue
    // Vue全局注册组件即可
    Vue.component(MyBread.name, MyBread)
    Vue.component(MyTest.name, MyTest)
    Vue.component(MyChannel.name, MyChannel)
    Vue.component(MyImage.name, MyImage)
  }
}
