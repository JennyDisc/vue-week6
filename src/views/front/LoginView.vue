<template>
  這是登入畫面
  <form id="form" class="form-signin" @submit.prevent="login">
    <div class="form-floating mb-3">
      <!-- v-model雙向綁定 -->
      <input
        type="email"
        class="form-control"
        v-model="user.username"
        id="username"
        placeholder="name@example.com"
        required
        autofocus
      />
      <label for="username">Email address</label>
    </div>
    <div class="form-floating">
      <!-- v-model雙向綁定 -->
      <input
        type="password"
        class="form-control"
        v-model="user.password"
        id="password"
        placeholder="Password"
        required
      />
      <label for="password">Password</label>
    </div>
    <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
      登入
    </button>
  </form>
</template>

<script>
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const loginUrl = `${VITE_APP_URL}v2/admin/signin`
      // this.$http.post(,)發送請求。第二個參數紀錄要傳送給對方伺服器的資料內容
      this.$http
        .post(loginUrl, this.user)
        .then((res) => {
          // console.log(res)

          // 儲存 Token
          const { expired, token } = res.data // 解構寫法。表示expired與token來自res.data
          // hexToken自定義名稱，把這個cookies儲存起來時要用什麼名稱
          // expires是一般時間格式。可以用new Date() 轉型成時間格式
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`

          // 路由轉址(轉跳到指定頁面)。用$router方法集的push
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          // 驗證登入失敗跳出視窗
          alert(err.response.data.message)
          // console.dir(error);
        })
    }
  }
}
</script>
