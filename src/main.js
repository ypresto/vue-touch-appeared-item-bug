import Vue from 'vue'
import VueTouch from 'vue-touch'
import App from './App'

Vue.use(VueTouch)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
