import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'
// import Vuetify from 'vuetify'
// import '../node_modules/vuetify/dist/vuetify.min.css'

// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);
// Vue.use(Vuetify);

// Register routes
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
