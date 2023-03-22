<template>
  這是「管理者」使用的後台頁面
  <router-link to="/admin/products">後台產品列表</router-link> |
  <router-link to="/admin/orders">後台訂單列表</router-link> |
  <router-link to="/">回前台</router-link> |
  <a href="#" @click.prevent="logout">登出</a>
  <hr />
  <router-view></router-view>
</template>

<script>
import { RouterView } from 'vue-router'
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      checkSuccess: false
    }
  },
  components: {
    RouterView
  },
  methods: {
  // 進入Dashboard頁面都要進行驗證
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      // 法1
      this.$http.defaults.headers.common.Authorization = token
      const loginCheckurl = `${VITE_APP_URL}v2/api/user/check`

      this.$http.post(loginCheckurl, token)
        .then(res => {
          // console.log(res)
          if (!res.data.success) {
            alert('您尚未登入!')
            // 路由轉址(轉跳到指定頁面)。用$router方法集的push
            this.$router.push('/login')
          }
        })
        .catch(() => {
        // 把登入失敗要做的事情都放在這
        // console.dir(err)
          alert('您尚未登入!')
          this.$router.push('/login')
        })
    },

    // 寫法2
    //   if (token) {
    //     this.$http.defaults.headers.common.Authorization = token

    //     const loginCheckurl = `${VITE_APP_URL}v2/api/user/check`
    //     this.$http.post(loginCheckurl)
    //       .then(res => {
    //         this.checkSuccess = true
    //       })
    //       .catch((err) => {
    //         alert(err.response.data.message)
    //         // 路由轉址(轉跳到指定頁面)。用$router方法集的push
    //         this.$router.push('/login')
    //       })
    //   } else {
    //     alert('您尚未登入!')
    //     this.$router.push('/login')
    //   }
    // },
    logout () {
    // 清除登入時留存的cookies
      document.cookie = `hexToken=; expires=${new Date()};`
      // 路由轉址(轉跳到指定頁面)。用$router方法集的push
      this.$router.push('/login')
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
