import { createApp } from 'vue'
// lib
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import ElementPro from 'element-pro-components'
import 'element-pro-components/lib/styles/index.css'

// root
import App from './App.vue'
import router from './route/router'
// style
import "./assets/scss/common.scss"

createApp(App).use(ElementPlus).use(ElementPro).use(router).mount('#app')
