import Vue from 'vue'
import App from './App.vue'
import Students from './components/Students App.vue'
import Workers from './components/Workers App.vue'
import Event from './components/Event.vue'
Vue.component('students', Students) //students object name and Students compunent name-->
Vue.component('workers', Workers)

new Vue({
  components: {
   Event 
  },
  render: h => h(App),
}).$mount('#app')

