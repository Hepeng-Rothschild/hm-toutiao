<template>
  <div class="container">
    <el-card class="my-card">
      <!-- logo -->
      <img src="../../assets/images/logo_index.png" alt>
      <!-- 表单 -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:236px;margin-right:10px"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="100%" @click="login()">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data () {
    // 自定义校验函数
    const checkMobile = (rule, value, callback) => {
      // 按照自己的校验逻辑去校验值value即可
      if (!/^1[3-9]\d{9}/.test(value)) {
        return callback(new Error('手机格式不对'))
      }
      callback()
    }
    return {
      // 表单的数据对象
      loginForm: {
        // 字段参考接口文档
        mobile: '13911111111',
        code: '246810'
      },
      // 校验规则对象
      loginRules: {
        mobile: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          },
          {
            len: 11,
            message: '请输入正确的手机号',
            trigger: 'blur'
          },
          {
            validator: checkMobile,
            trigger: 'blur'
          }
        ],
        code: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          },
          {
            len: 6,
            message: '请输入6位验证码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      // 1.对整个表单进行校验
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          //     // 2.校验成功发起登录请求
          //     this.$http
          //       .post(
          //         "http://ttapi.research.itcast.cn/mp/v1_0/authorizations",
          //         this.loginForm
          //       )
          //       .then(res => {
          //         // res 是响应对象，res.data数据属于响应主体
          //         //存储用户信息
          //         store.setUser(res.data.data);

          //         this.$router.push("/");
          //       })
          //       .catch(() => {
          //         // 请求失败提示验证码或手机号错误
          //         this.$message.error("手机号或验证码错误");
          //       });
          // 怎么去处理await使用的时候失败的请求
          // 怎么捕获代码运行异常（保存） try{可能会执行报错代码}catch（e）{处理错误}
          try {
            const { data: { data } } = await this.$http.post('authorizations', this.loginForm)
            store.setUser(data)
            this.$router.push('/')
          } catch (e) {
            this.$message.error('手机号或验证码错误')
          }
        }
      })
    }
  }
}
</script>

<style scoped lang= 'less'>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  /* // center / cover;       背景图定位   /    背景图尺寸
  cover 等比缩放铺满容器多余被裁减
  contain  等比缩放完全显示在当前容器  可能存在留白
  */
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  .my-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 200px;
      display: block;
      margin: 0 auto 30px;
    }
  }
}
</style>
