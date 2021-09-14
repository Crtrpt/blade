import { createStore } from 'vuex'
import ConnectList from "./modules/connectList"
import App from "./modules/app"

const store = createStore({
    modules:{
      connectlist:ConnectList,
      app:App
    },
   
  })
export default store