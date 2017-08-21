// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mui from './assets/libs/mui.min'
import axios from 'axios'
import store from './store'

Vue.prototype.$mui = mui
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.filter('tel-formater', function (value) {
  var reg = /^(\d{3})(\d{4})(\d{4})$/
  var matches = reg.exec(value)
  return matches[1] + ' ' + matches[2] + ' ' + matches[3]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data () {
    return {
      nav: '积分商城'
    }
  },
  store,
  mounted () {
    var _this = this
    router.beforeEach((to, from, next) => {
      if (to.meta.title) {
        document.title = to.meta.title
        _this.nav = to.meta.title
      }
      next()
    })
  },
  template: '<App :nav="nav"/>',
  components: { App }
})
