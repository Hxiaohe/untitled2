import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sellercenter from '@/components/Sellercenter'
import Buyercenter from '@/components/Buyercenter'
import Upcar from '@/components/Upcar'
import Upcarsuccess from '@/components/Upcarsuccess'
import Searchcar from '@/components/Searchcar'
import Carlist from '@/components/Carlist'
import Cardetail from '@/components/Cardetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sellercenter',
      name: 'Sellercenter',
      component: Sellercenter
    },
    {
      path: '/buyercenter',
      name: 'Buyercenter',
      component: Buyercenter
    },
    {
      path: '/upcar',
      name: 'Upcar',
      component: Upcar
    },
    {
      path: '/upcarsuccess',
      name: 'Upcarsuccess',
      component: Upcarsuccess
    },
    {
      path: '/searchcar',
      name: 'Searchcar',
      component: Searchcar
    },
    {
      path: '/carlist',
      name: 'Carlist',
      component: Carlist
    },
    {
      path: '/cardetail',
      name: 'Cardetail',
      component: Cardetail
    }

  ]
})
