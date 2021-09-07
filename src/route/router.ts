import * as VueRouter from 'vue-router'

import HelloWorld from '../views/HelloWorld.vue'
import ConvertTool1 from '../views/tools/ConvertTool1.vue'
import Test1 from '../views/code/Test1.vue'
import Test2 from '../views/code/Test2.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/tool1', component: ConvertTool1 },
  { path: '/test1', component: Test1 },
  { path: '/test2', component: Test2 },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router
