import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import myHome from '@/components/home/home'
import myContactUs from '@/components/contactUs/contactUs'
import myJoinUs from '@/components/joinUs/joinUs'
import myLogin from '@/components/login/login'


export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: myHome
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: myContactUs
    },
    {
      path: '/joinUs',
      name: 'joinUs',
      component: myJoinUs
    },
    {
      path: '/login',
      name: 'login',
      component: myLogin
    },

  ]
})
