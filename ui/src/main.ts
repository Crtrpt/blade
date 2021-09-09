import './index.scss'
import {createApp,h} from 'vue';
import {createRouter,createWebHashHistory} from "vue-router";
import route from "./route/index.js";
import App from './App.vue'

console.log(route);
const router = createRouter({
    history: createWebHashHistory(),
    routes:route
})

router.beforeEach((to, from) => {
   return true;  
})


const app = createApp(App)

app.use(router)

app.mount('#app')