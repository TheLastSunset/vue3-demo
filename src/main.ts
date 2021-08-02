import { createApp } from 'vue'
import App from './App.vue'
import "./assets/scss/common.scss"
import router from './route/router'

createApp(App).use(router).mount('#app')
