import * as VueRouter from 'vue-router';

import HelloWorld from '../views/HelloWorld.vue';
import ConvertTool1 from '../views/tools/ConvertTool1.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/tool1', component: ConvertTool1 },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
