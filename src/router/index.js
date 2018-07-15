import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Sellercenter from '@/components/Sellercenter'
import Buyercenter from '@/components/Buyercenter'
import Upcar from '@/components/Upcar'
import Upcarsuccess from '@/components/Upcarsuccess'
import Searchcar from '@/components/Searchcar'
import Carlist from '@/components/Carlist'
import Cardetail from '@/components/Cardetail'
import Appointcar from '@/components/Appointcar'
import Interiordetail from '@/components/Interiordetail'
import Upinterior from '@/components/Upinterior'
import Alllist from '@/components/Alllist'
import Appointfix from '@/components/Appointfix'
import Feedback from '@/components/Feedback'
import Fixhandle from '@/components/Fixhandle'
import Searchinterior from '@/components/Searchinterior'
import Shopdetail from '@/components/Shopdetail'
import Submitresult from '@/components/Submitresult'
import Trycarhandle from '@/components/Trycarhandle'
import Youlike from '@/components/Youlike'
import Upinteriorsuccess from '@/components/Upinteriorsuccess'
import Allorder from '@/components/Allorder'
import Shoplist from '@/components/Shoplist'
import Shopindex from '@/components/Shopindex'
// import Shoppingcart from '@/components/Shoppingcart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
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
    },
    {
      path: '/appointcar',
      name: 'Appointcar',
      component: Appointcar
    },
    {
      path: '/interiordetail',
      name: 'Interiordetail',
      component: Interiordetail
    },
    {
      path: '/upinterior',
      name: 'Upinterior',
      component: Upinterior
    },
    {
      path: '/alllist',
      name: 'Alllist',
      component: Alllist
    },
    {
      path: '/appointfix',
      name: 'Appointfix',
      component: Appointfix
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '/fixhandle',
      name: 'Fixhandle',
      component: Fixhandle
    },
    {
      path: '/searchinterior',
      name: 'Searchinterior',
      component: Searchinterior
    },
    {
      path: '/shopdetail',
      name: 'Shopdetail',
      component: Shopdetail
    },
    {
      path: '/submitresult',
      name: 'Submitresult',
      component: Submitresult
    },
    {
      path: '/trycarhandle',
      name: 'Trycarhandle',
      component: Trycarhandle
    },
    {
      path: '/youlike',
      name: 'Youlike',
      component: Youlike
    },
    {
      path: '/upinteriorsuccess',
      name: 'Upinteriorsuccess',
      component: Upinteriorsuccess
    },
    {
      path: '/allorder',
      name: 'Allorder',
      component: Allorder
    },
    {
      path: '/shoplist',
      name: 'Shoplist',
      component: Shoplist
    },
    {
      path: '/shopindex',
      name: 'Shopindex',
      component: Shopindex
    }
    // },
    // {
    //   path: '/shoppingcart',
    //   name: 'Shoppingcart',
    //   component: Shoppingcart
    // }

  ]
})
