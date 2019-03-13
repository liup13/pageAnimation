import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import common from '@/commonFunction/common.js'

Vue.use(Router)
Vue.prototype.common = common;

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
