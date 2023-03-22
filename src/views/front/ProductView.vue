<template>
這是單一產品頁面
<h2>{{ product.title }}</h2>
<img :src="product.imageUrl" alt="" class="img-fluid">
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      // 寫法1：const id=this.$route.params.id
      // 寫法2
      const { id } = this.$route.params
      //   console.log(this.$route.params)
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          console.log(res)
          this.product = res.data.product
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
