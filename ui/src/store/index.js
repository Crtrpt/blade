import { createStore } from 'vuex'
import ConnectList from "./modules/connectList"
import App from "./modules/app"
import Layout from "./modules/layout"

const store = createStore({
    modules:{
      connectlist:ConnectList,
      app: App,
      layout:Layout,
    },
   
  })
export default store