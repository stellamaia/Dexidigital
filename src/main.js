import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import VueMeta from 'vue-meta';
Vue.use(VueMeta);
import 'bootstrap/dist/css/bootstrap.css'
import VueTheMask from 'vue-the-mask'
// import * as firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/analytics";
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// Vue.prototype.$analytics = firebase.analytics();
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
