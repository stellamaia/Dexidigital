import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueGtag from 'vue-gtag'

import Vue2Editor from "vue2-editor"; 
Vue.use(Vue2Editor);

Vue.use(VueGtag, {
  config: {
    id: 'G-4R29PPN3G6'
  },
});

import 'bootstrap/dist/css/bootstrap.css'
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

import VueMeta from 'vue-meta';
Vue.use(VueMeta);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
