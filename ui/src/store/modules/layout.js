var Layout={
      namespaced:true,
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
}

export default Layout;