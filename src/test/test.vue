<template>
  <div>
    <button @click="get">get请求</button>
    <button @click="post">post请求</button>
    <button @click="http">http请求</button>
    <div>{{goods}}</div>
    <Loading v-if="loading"></Loading>
  </div>


</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  import Loading from '@/components/Loading'
  export default {
    name: 'hello',
    data () {
      return {
        goods: '',
        loading: false
      }
    },
    components: {
      Loading
    },
    methods: {
      get () {
        axios.get('/mock/goods.json', {
          params: {
            goodsId: '123'
          },
          headers: {
            token: 'jask'
          }
        }).then(res => {
          this.goods = res.data.data
          console.log(res.data)
        })
      },
      post () {
        axios.post('/mock/goods.json', {
          data: {
            goodsId: '123'
          },
          headers: {
            token: 'rose'
          },
          time: 50
        }).then(res => {
          this.goods = res.data.data
        }).catch(error => {
          console.log(error)
        })
      },
      http () {
        axios({
          url: '/mock/goods.json',
          method: 'get',
          params: {
            goodsId: '123'
          }
        }).then(res => {
          this.goods = res.data.data
        })
      }
    },
    mounted: function () {
      var that = this
      axios.interceptors.request.use(function (config) {
        that.loading = true
        console.log('request init..')
        return config
      })
      axios.interceptors.response.use(response => {
        that.loading = false
        console.log('response init...')
        return response
      })
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>


</style>
