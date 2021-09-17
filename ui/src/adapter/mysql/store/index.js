var Mysql = {
  namespaced: true,
  state() {
    return {
      dblist: [
        {
          name:"dbtest"
        },
        {
          name:"dbtest2"
        }
      ]
    }
  },
  getters: {
    dbList(state) {
      return state.dblist;
    },
  },
}

export default Mysql;