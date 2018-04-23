// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import store from './store/store'
import router from './router/router'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true
Vue.use(VueResource)
Vue.use(iview)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
