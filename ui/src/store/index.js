import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        version: "v0.0.1"
      }
    },
    getters: {
        version(state){
            return state.version;
        }
    }
  })
export default store