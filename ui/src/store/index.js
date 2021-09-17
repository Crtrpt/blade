import { createStore } from "vuex";
import ConnectList from "./modules/connectList";
import App from "./modules/app";
import Layout from "./modules/layout";

import Mysql from "../adapter/mysql/store/index.js";
import Mqtt from "../adapter/mqtt/store/index.js";
import Redis from "../adapter/redis/store/index.js";

const store = createStore({
  modules: {
    connectlist: ConnectList,
    app: App,
    layout: Layout,
    mysql: Mysql,
    mqtt: Mqtt,
    redis: Redis,
  },
});
export default store;
