import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import myHome from '@/components/home/home'
import myContactUs from '@/components/contactUs/contactUs'
import myJoinUs from '@/components/joinUs/joinUs'
import myCompanyProfile from '@/components/companyProfile/companyProfile'


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
      path: '/companyProfile',
      name: 'companyProfile',
      component: myCompanyProfile
    },


  ]
})
