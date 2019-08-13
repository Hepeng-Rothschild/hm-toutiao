// 封装操作sessionStorage的函数   提供给其他模块使用
// 1.约定好key的名字
// 2.约定好value的格式   字符串格式json数据
const KEY = 'hm-toutiao-78-user'

export default {
  // 设置用户信息
  setUser (user) {
    // 存储user对象数据
    window.sessionStorage.setItem(KEY, JSON.stringify(user))
  },
  // 获取用户信息
  getUser () {
    return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
  },
  // 移除用户信息
  clearUser () {
    // sessionStorange.clear() 清除所有的sessionStorage本地存储    不建议使用
    window.sessionStorage.removeItem(KEY)
  }
}
