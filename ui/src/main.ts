import './index.scss'
import {createApp,h,defineAsyncComponent } from 'vue';
import {createRouter,createWebHashHistory} from "vue-router";
import route from "./route/index.js";
import store from "./store/index.js";

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
app.use(store)
app.mount('#app')

app.component("mysql",defineAsyncComponent(() =>
    import('./adapter/mysql/Mysql.vue')
))
app.component("mysqlproperty",defineAsyncComponent(() =>
    import('./adapter/mysql/MysqlProperty.vue')
))

app.component("mqtt",defineAsyncComponent(() =>
    import('./adapter/mqtt/Mqtt.vue')
))
app.component("mqttproperty",defineAsyncComponent(() =>
    import('./adapter/mqtt/MqttProperty.vue')
))

app.component("redis",defineAsyncComponent(() =>
    import('./adapter/redis/Redis.vue')
))
app.component("redisproperty",defineAsyncComponent(() =>
    import('./adapter/redis/RedisProperty.vue')
))


app.component("home",defineAsyncComponent(() =>
    import('./adapter/home/Home.vue')
))
