<template>
  這是產品列表頁面
  <table class="table">
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.title }}</td>
        <td><img :src="product.imageUrl" alt="" width="200" /></td>
        <td>
          <!-- to後面連結要寫表達式 -->
          <RouterLink
            :to="`/product/${product.id}`"
            class="btn btn-outline-primary"
            >產品細節</RouterLink
          >
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="addToCart(product.id)"
          >
            加入購物車
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { RouterLink } from 'vue-router'
// 法2：使用axios
// import { axios } from 'axios'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProducts () {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          // console.log(res)
          this.products = res.data.products
        })
    },
    addToCart (id) {
      const data = {
        product_id: id,
        qty: 1
      }
      //   法2：axios.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })...
      //   法1：使用套件使用
      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          // console.log(res)
          alert('成功加入購物車!')
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
